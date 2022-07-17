import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('Test sum when all checked', () => {
  const app = render(<App />);
  // user input 3 fields
  userEvent.type(screen.getAllByRole('number-input')[0], '1');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '3');

  // user checkbox
  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]);
  userEvent.click(screen.getAllByRole('checkbox')[2]);
  // click on operation
  userEvent.click(screen.getByText('+'));

  // get the result
  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 6');

});
