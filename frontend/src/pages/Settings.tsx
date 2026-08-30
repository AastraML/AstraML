import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { useAppStore } from '../store';
import { Button } from '../components/ui/Button';
import { Moon, Sun } from 'lucide-react';
import { AetherRibbonMesh } from '../components/ui/AetherRibbonMesh';

export default function Settings() {
  const { theme, setTheme } = useAppStore();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 relative">
      <AetherRibbonMesh />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight drop-shadow-md">Settings</h2>
        <p className="text-muted-foreground drop-shadow-md">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <div className="grid gap-6 relative z-10">
        <Card className="shadow-2xl border-muted/50 bg-background/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode.
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
