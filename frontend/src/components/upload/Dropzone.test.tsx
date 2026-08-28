import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  it('renders correctly', () => {
    render(<Dropzone onFileSelect={() => {}} />);
    expect(screen.getByText(/Click to upload or drag and drop/i)).toBeInTheDocument();
  });

  it('shows error for invalid file type', () => {
    render(<Dropzone onFileSelect={() => {}} allowedTypes={['.csv']} />);
    const input = screen.getByTestId('file-input');
    // Simulate file input change
    const file = new File(['dummy content'], 'test.txt', { type: 'text/plain' });
    fireEvent.change(input, { target: { files: [file] } });
    
    expect(screen.getByText(/Invalid file type/i)).toBeInTheDocument();
  });

  it('shows error for file size exceeding limit', () => {
    render(<Dropzone onFileSelect={() => {}} maxSizeMB={0.001} />); // 1KB limit
    const input = screen.getByTestId('file-input');
    
    // Create a 2KB file
    const content = new Array(2048).fill('a').join('');
    const file = new File([content], 'test.csv', { type: 'text/csv' });
    
    fireEvent.change(input, { target: { files: [file] } });
    
    expect(screen.getByText(/File size exceeds/i)).toBeInTheDocument();
  });
});
