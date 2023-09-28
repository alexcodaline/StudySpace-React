import { render, screen } from '@testing-library/react';
import Posts from "../components/Posts.js";

test('Post has title', () => {
  render(<Posts />);
  const titleElement = screen.getByText(/News/i);
  expect(titleElement).toBeInTheDocument(); 
});
