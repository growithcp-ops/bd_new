import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // ---------------------------------------------------------------------------
  // Investor access (server-side session auth)
  // ---------------------------------------------------------------------------
  // NOTE: This is intentionally lightweight (no DB/passport) since it's a
  // private investor gate.

  const INVESTOR_USERNAME = process.env.INVESTOR_USERNAME ?? "invester";
  const INVESTOR_PASSWORD = process.env.INVESTOR_PASSWORD;

  const isInvestorAuthed = (req: any): boolean => {
    return Boolean(req.session?.isInvestor);
  };

  app.get("/api/investor/me", (req: any, res) => {
    return res.json({ ok: true, authenticated: isInvestorAuthed(req) });
  });

  app.post("/api/investor/login", (req: any, res) => {
    const username = String(req.body?.username ?? "");
    const password = String(req.body?.password ?? "");

    // If password isn't configured, don't allow login.
    if (!INVESTOR_PASSWORD) {
      return res.status(503).json({ message: "Investor login is not configured" });
    }

    if (username !== INVESTOR_USERNAME || password !== INVESTOR_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.isInvestor = true;
    return res.json({ ok: true });
  });

  app.post("/api/investor/logout", (req: any, res) => {
    if (!req.session) return res.json({ ok: true });
    req.session.destroy((err: any) => {
      if (err) return res.status(500).json({ message: "Failed to logout" });
      res.clearCookie("bd_session");
      return res.json({ ok: true });
    });
  });

  app.get("/api/investor/stats", (req: any, res) => {
    if (!isInvestorAuthed(req)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Placeholder stats (you said you’ll provide business stats later)
    return res.json({
      ok: true,
      stats: [
        { label: "Total Processing Capacity", value: "800+ TPH" },
        { label: "Operational Footprint", value: "6 Acres" },
        { label: "Material Recovery", value: "95%" },
        { label: "Regulatory Compliance", value: "Fully Auditable" },
      ],
    });
  });

  return httpServer;
}
