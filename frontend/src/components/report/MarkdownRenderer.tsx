import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '../../lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  // Memoize to prevent unnecessary re-parsing of large markdown strings
  const renderedMarkdown = useMemo(() => (
    <div
      className={cn(
        'prose prose-sm sm:prose-base dark:prose-invert max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:border',
        'prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded',
        'prose-img:rounded-xl prose-img:border',
        'prose-table:border-collapse prose-table:w-full',
        'prose-th:border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2 prose-th:text-left',
        'prose-td:border prose-td:px-4 prose-td:py-2',
        className
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  ), [content, className]);

  return (
    <article className="w-full">
      {renderedMarkdown}
    </article>
  );
}
