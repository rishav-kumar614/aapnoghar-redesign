import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PresidentialSuitePage from "./pages/PresidentialSuitePage";
import PresidentialSuite2Page from "./pages/PresidentialSuite2Page";
import SuiteRoomPage from "./pages/SuiteRoomPage";
import LuxuryRoomPage from "./pages/LuxuryRoomPage";
import LuxuryRoom2Page from "./pages/LuxuryRoom2Page";
import LuxuryRoomShowerGlassPage from "./pages/LuxuryRoomShowerGlassPage";
import DeluxeRoomPage from "./pages/DeluxeRoomPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/presidential-suite-room-1"} component={PresidentialSuitePage} />
      <Route path={"/presidential-suite-room-2"} component={PresidentialSuite2Page} />
      <Route path={"/suite-room"} component={SuiteRoomPage} />
      <Route path={"/luxury-room"} component={LuxuryRoomPage} />
      <Route path={"/luxury-room-2"} component={LuxuryRoom2Page} />
      <Route path={"/Luxury-Room-with-Shower-Glass-Partition"} component={LuxuryRoomShowerGlassPage} />
      <Route path={"/deluxe-room"} component={DeluxeRoomPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
