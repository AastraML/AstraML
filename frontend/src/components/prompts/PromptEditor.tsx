import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { useAppStore } from '../../store';
import { Save } from 'lucide-react';

export function PromptEditor() {
  const { systemPrompt, setSystemPrompt } = useAppStore();
  const [localPrompt, setLocalPrompt] = useState(systemPrompt);

  const handleSave = () => {
    setSystemPrompt(localPrompt);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Prompt Configuration</CardTitle>
        <CardDescription>
          Customize the core instructions given to the AI model before it analyzes the data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="system-prompt" className="text-sm font-medium">Base Prompt</label>
          <textarea
            id="system-prompt"
            className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={localPrompt}
            onChange={(e) => setLocalPrompt(e.target.value)}
            placeholder="Enter system prompt here..."
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={localPrompt === systemPrompt}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
