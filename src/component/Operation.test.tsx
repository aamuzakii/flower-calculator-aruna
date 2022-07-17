import { render, screen } from '@testing-library/react';
import { Operation } from './Operation';

test('all operation button should be enabled', () => {
  render(<Operation startOperation={function (type: string): void {} }  />);

  screen.queryAllByRole('button').forEach((button) => {
    expect(button).toBeEnabled();
 })
});
