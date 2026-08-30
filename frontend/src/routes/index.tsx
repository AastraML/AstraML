import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { PublicLayout } from '../components/layout/PublicLayout';
import { AuthLayout } from '../components/layout/AuthLayout';

const Landing = lazy(() => import('../pages/Landing'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Upload = lazy(() => import('../pages/Upload'));
const Explain = lazy(() => import('../pages/Explain'));
const PromptEngineering = lazy(() => import('../pages/PromptEngineering'));
const Settings = lazy(() => import('../pages/Settings'));
const PlaceholderPage = lazy(() => Promise.resolve({ 
  default: () => <div className="flex h-full items-center justify-center text-muted-foreground">Page Under Construction</div> 
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Suspense fallback={<div>Loading...</div>}><Landing /></Suspense> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: 'signin', element: <Suspense fallback={<div>Loading...</div>}><SignIn /></Suspense> },
      { path: 'signup', element: <Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense> },
    ],
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
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
        element: <Suspense fallback={<div>Loading...</div>}><Upload /></Suspense>,
      },
      {
        path: 'train',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'explain',
        element: <Suspense fallback={<div>Loading...</div>}><Explain /></Suspense>,
      },
      {
        path: 'chat',
        element: <Suspense fallback={<div>Loading...</div>}><PromptEngineering /></Suspense>,
      },
      {
        path: 'experiments',
        element: <Suspense fallback={<div>Loading...</div>}><PlaceholderPage /></Suspense>,
      },
      {
        path: 'settings',
        element: <Suspense fallback={<div>Loading...</div>}><Settings /></Suspense>,
      },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
