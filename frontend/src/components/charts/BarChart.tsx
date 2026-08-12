
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface BarChartProps {
  data: any[];
  xAxisKey: string;
  bars: { key: string; name?: string; color?: string }[];
  colors?: string[];
}

const DEFAULT_COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))'];

export function BarChart({ data, xAxisKey, bars, colors = DEFAULT_COLORS }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <XAxis
          dataKey={xAxisKey}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            borderColor: 'hsl(var(--border))',
            borderRadius: 'var(--radius)',
            color: 'hsl(var(--foreground))',
          }}
          itemStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        {bars.map((bar, index) => (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            name={bar.name || bar.key}
            fill={bar.color || colors[index % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
