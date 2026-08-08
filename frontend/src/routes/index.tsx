import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const PlaceholderPage = lazy(() => Promise.resolve({ 
  default: () => <div className="flex h-full items-center justify-center text-muted-foreground">Page Under Construction</div> 
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'upload',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'train',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'explain',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'chat',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'experiments',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
