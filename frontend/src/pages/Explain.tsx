import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MarkdownRenderer } from '../components/report/MarkdownRenderer';
import { Download, FileText } from 'lucide-react';

const mockReportContent = `
# Model Analysis Report

This is a comprehensive report on the performance and characteristics of the trained model.

## Executive Summary

The model achieved an overall accuracy of **92.4%** on the holdout test set, demonstrating strong generalization capabilities. Key predictive features aligned well with domain expectations.

### Performance Metrics

| Metric | Score | Interpretation |
|--------|-------|----------------|
| Accuracy | 0.924 | Excellent |
| Precision | 0.910 | Very Good |
| Recall | 0.895 | Good |
| F1 Score | 0.902 | Very Good |

## Feature Importance

The top 3 drivers of the model's predictions are:
1. **Historical Usage** (Weight: \`0.45\`)
2. **Account Age** (Weight: \`0.22\`)
3. **Recent Interactions** (Weight: \`0.15\`)

> **Note:** Feature importance is calculated using SHAP (SHapley Additive exPlanations) values to ensure fair attribution across correlated features.

## Data Quality Warnings

- ~~Missing values in \`income\` column~~ (Resolved via median imputation)
- High cardinality in \`zip_code\` feature (Handled via target encoding)

### Code Snippet Reference
To reproduce this scoring pipeline locally, use the following code:

\`\`\`python
import pandas as pd
from astra_model import load_pipeline

pipeline = load_pipeline("model_v1.pkl")
predictions = pipeline.predict(new_data)
\`\`\`

## Recommendations
We recommend deploying this model to staging and monitoring the distribution of the \`Account Age\` feature, as it exhibits slight drift in the latest batch.
`;

export default function Explain() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportReady] = useState(true); // Mocking it as ready

  const handleDownload = () => {
    // Mock download logic
    const element = document.createElement("a");
    const file = new Blob([mockReportContent], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = "astraml-report.md";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Explainability & Reports</h2>
          <p className="text-muted-foreground">
            View AI-generated insights and comprehensive model analysis.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleDownload} disabled={!reportReady}>
            <Download className="mr-2 h-4 w-4" />
            Download Markdown
          </Button>
          <Button onClick={() => setIsGenerating(true)} disabled={isGenerating}>
            <FileText className="mr-2 h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Generate New Report'}
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Analysis</CardTitle>
            <CardDescription>
              AI-generated summary of model performance, feature impacts, and recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {reportReady ? (
              <div className="rounded-xl border bg-card p-8">
                <MarkdownRenderer content={mockReportContent} />
              </div>
            ) : (
              <div className="flex h-[400px] flex-col items-center justify-center space-y-4 text-muted-foreground">
                <FileText className="h-12 w-12 opacity-20" />
                <p>Click 'Generate New Report' to analyze your model.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
