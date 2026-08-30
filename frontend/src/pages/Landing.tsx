import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { AetherRibbonMesh } from '../components/ui/AetherRibbonMesh';

export default function Landing() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-center min-h-screen">
      <AetherRibbonMesh />
      <div className="max-w-4xl space-y-8 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Machine Learning, <br className="hidden sm:block" />
          <span className="text-primary">simplified.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          AstraML is the all-in-one platform to train, evaluate, and explain your machine learning models without writing complex infrastructure code.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/signup">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Start for free
            </Button>
          </Link>
          <Link to="/signin">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
              View Demo
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-left relative z-10">
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">Data Profiling</h3>
          <p className="text-muted-foreground">Automatically detect data leakage and profile your datasets for immediate insights before training.</p>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">Automated Training</h3>
          <p className="text-muted-foreground">Train optimized models instantly. We handle the hyperparameter tuning and model selection.</p>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">AI Explainability</h3>
          <p className="text-muted-foreground">Generate comprehensive markdown reports and SHAP visualizations to explain your model's decisions.</p>
        </div>
      </div>
    </div>
  );
}
