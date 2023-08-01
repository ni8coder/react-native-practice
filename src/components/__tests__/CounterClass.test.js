import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CounterClass from '../CounterClass';

describe('Counter Component', () => {
  it('renders initial count', () => {
    const {getByText} = render(<CounterClass />);
    expect(getByText('Count: 0')).toBeDefined();
  });

  it('increments count when increment button is pressed', () => {
    const {getByText} = render(<CounterClass />);
    const incrementButton = getByText('Increment');
    fireEvent.press(incrementButton);
    expect(getByText('Count: 1')).toBeDefined();
  });

  it('decrements count when decrement button is pressed', () => {
    const {getByText} = render(<CounterClass />);
    const decrementButton = getByText('Decrement');
    fireEvent.press(decrementButton);
    expect(getByText('Count: -1')).toBeDefined();
  });

  it('resets count when reset button is pressed', () => {
    const {getByText} = render(<CounterClass />);
    const incrementButton = getByText('Increment');
    fireEvent.press(incrementButton);
    const resetButton = getByText('Reset');
    fireEvent.press(resetButton);
    expect(getByText('Count: 0')).toBeDefined();
  });
});
