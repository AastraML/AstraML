import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from './Dashboard';
import { MemoryRouter } from 'react-router-dom';

describe('Dashboard', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to AstraML/i)).toBeInTheDocument();
  });
});
