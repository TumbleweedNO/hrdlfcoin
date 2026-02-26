import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import AgentMode from "./pages/AgentMode";
import Verify from "./pages/Verify";
import JoinMovement from "./pages/JoinMovement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/* Cyberpunk Street Fusion Design
 * Dark theme with neon accents (blue, pink, yellow, green)
 * Orbitron for display, Rajdhani for body, Share Tech Mono for code
 */
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/faq"} component={FAQPage} />
      <Route path={"/agent-mode"} component={AgentMode} />
      <Route path={"/verify"} component={Verify} />
      <Route path={"/join"} component={JoinMovement} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={TermsOfService} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
