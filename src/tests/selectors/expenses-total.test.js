import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total.js';

test('should return 0 (no expenses)', () => {
  const functionCall = selectExpensesTotal([]);
  expect(functionCall).toBe(0);
});

test('should correctly add up a single expense', () => {
  const functionCall = selectExpensesTotal([expenses[0]]);
  expect(functionCall).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const functionCall = selectExpensesTotal([expenses[0], expenses[1]]);
  expect(functionCall).toBe(expenses[0].amount + expenses[1].amount);
});