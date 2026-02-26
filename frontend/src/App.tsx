import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { LeadCaptureProvider } from './context/LeadCaptureContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ResourceCategory } from './backend';

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
    path: '/',
    component: HomePage,
});

const categoryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/category/$category',
    component: CategoryPage,
});

const routeTree = rootRoute.addChildren([indexRoute, categoryRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
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
