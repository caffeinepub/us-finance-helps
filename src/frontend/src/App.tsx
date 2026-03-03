import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ResourceCategory } from "./backend";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LeadCaptureProvider } from "./context/LeadCaptureContext";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/HomePage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$category",
  component: CategoryPage,
});

const routeTree = rootRoute.addChildren([indexRoute, categoryRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <LeadCaptureProvider>
        <RouterProvider router={router} />
      </LeadCaptureProvider>
    </ErrorBoundary>
  );
}
