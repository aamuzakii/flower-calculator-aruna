import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('Test sum when all checked', () => {
  render(<App />);
  userEvent.type(screen.getAllByRole('number-input')[0], '1');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '3');

  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]);
  userEvent.click(screen.getAllByRole('checkbox')[2]);
  userEvent.click(screen.getByText('+'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 6');

});

test('Test substract when all checked', () => {
  render(<App />);
  userEvent.type(screen.getAllByRole('number-input')[0], '10');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '3');

  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]);
  userEvent.click(screen.getAllByRole('checkbox')[2]);
  userEvent.click(screen.getByText('-'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 5');

});

test('Test multiply when all checked', () => {
  render(<App />);
  userEvent.type(screen.getAllByRole('number-input')[0], '10');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '3');

  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]);
  userEvent.click(screen.getAllByRole('checkbox')[2]);
  userEvent.click(screen.getByText('x'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 60');

});

test('Test divide when all checked', () => {
  render(<App />);
  userEvent.type(screen.getAllByRole('number-input')[0], '100');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '5');

  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]);
  userEvent.click(screen.getAllByRole('checkbox')[2]);
  userEvent.click(screen.getByText('/'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 10');

});

test('Test sum when all unchecked', () => {
  render(<App />);
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert
  userEvent.type(screen.getAllByRole('number-input')[0], '1');
  userEvent.type(screen.getAllByRole('number-input')[1], '2');
  userEvent.type(screen.getAllByRole('number-input')[2], '3');

  userEvent.click(screen.getByText('+'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 0');
  window.alert = jsdomAlert;  // restore the jsdom alert
})

test('Test when there is a NaN operation case', () => {
  render(<App />);
  const jsdomAlert = window.alert;  
  window.alert = () => {};  
  userEvent.type(screen.getAllByRole('number-input')[0], '1');

  userEvent.click(screen.getAllByRole('checkbox')[0]);
  userEvent.click(screen.getAllByRole('checkbox')[1]); // checked but no input so will cause NaN
  userEvent.click(screen.getByText('+'));

  expect(screen.getByTestId('result-fragment')).toHaveTextContent('Hasil: 0');
  window.alert = jsdomAlert;  
})