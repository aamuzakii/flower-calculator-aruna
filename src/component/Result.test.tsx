import { render, screen } from '@testing-library/react';
import { Result } from './Result';

test('button should be enabled', async () => {
  render(<Result />);

  expect(await screen.findByTestId('result-fragment')).toBeEnabled();
});
