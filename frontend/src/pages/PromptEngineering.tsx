import { PromptEditor } from '../components/prompts/PromptEditor';

export default function PromptEngineering() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Prompt Engineering</h2>
        <p className="text-muted-foreground">
          Manage and configure the prompts used by the AI engine.
        </p>
      </div>
      
      <div className="grid gap-6">
        <PromptEditor />
      </div>
    </div>
  );
}
