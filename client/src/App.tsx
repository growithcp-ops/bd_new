import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/About";
import Technology from "@/pages/Technology";
import ProductsPage from "@/pages/Products";
import ImpactCalculator from "@/pages/ImpactCalculator";
import Invest from "@/pages/Invest";
import InvestorStats from "@/pages/InvestorStats";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/technology" component={Technology} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/invest" component={Invest} />
      <Route path="/impact-calculator" component={ImpactCalculator} />
      <Route path="/investor-stats" component={InvestorStats} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
