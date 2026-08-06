import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
