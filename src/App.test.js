import { render, screen, within } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

test('renders Little Lemon link', () => {
  render(<App />);
  const [firstHomeElement] = screen.getAllByText(/Home/i);
  const linkElement = firstHomeElement;
  expect(linkElement).toBeInTheDocument();
});

test('Opens Menu', () => {
  render(<App />);
  const [menuButton] = screen.getAllByText(/Menu/i);
  act(() => {
    menuButton.click();
  });
  const [menuItem] = screen.getAllByText(/Reservations/i);
  expect(menuItem).toBeInTheDocument();
});
