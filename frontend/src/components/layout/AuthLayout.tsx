import { Outlet, Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span>AstraML</span>
          </Link>
          <p className="text-muted-foreground mt-2 text-center">
            Welcome back to your machine learning workspace.
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
