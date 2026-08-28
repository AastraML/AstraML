import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the Dashboard lazily via routing', async () => {
    render(<App />);
    expect(await screen.findByText('Dashboard')).toBeInTheDocument();
  });
});
