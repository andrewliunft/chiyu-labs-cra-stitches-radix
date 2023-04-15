import { render, screen } from '@testing-library/react';
import AppPage from './app/app-page';

test('renders learn react link', () => {
  render(<AppPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
