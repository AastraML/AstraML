import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChartCard } from '../components/charts/ChartCard';
import { LineChart } from '../components/charts/LineChart';
import { useMemo } from 'react';

export default function Dashboard() {
  const mockPerformanceData = useMemo(() => [
    { epoch: '1', accuracy: 0.65, val_accuracy: 0.60 },
    { epoch: '2', accuracy: 0.72, val_accuracy: 0.68 },
    { epoch: '3', accuracy: 0.81, val_accuracy: 0.76 },
    { epoch: '4', accuracy: 0.86, val_accuracy: 0.82 },
    { epoch: '5', accuracy: 0.91, val_accuracy: 0.84 },
    { epoch: '6', accuracy: 0.94, val_accuracy: 0.87 },
    { epoch: '7', accuracy: 0.96, val_accuracy: 0.89 },
  ], []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to AstraML. Upload your dataset to begin training.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Models</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No models trained yet</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Datasets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Upload a dataset to start</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Experiments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Run an experiment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compute Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ChartCard 
          title="Overview" 
          description="Model performance across experiments" 
          className="col-span-4"
        >
          <LineChart
            data={mockPerformanceData}
            xAxisKey="epoch"
            lines={[
              { key: 'accuracy', name: 'Accuracy' },
              { key: 'val_accuracy', name: 'Validation Accuracy', color: 'hsl(var(--destructive))' },
            ]}
          />
        </ChartCard>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>You have no recent activity.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
               <div className="flex items-center justify-center h-[120px]">
                  <Button variant="outline">Upload Dataset</Button>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
