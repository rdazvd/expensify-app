import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.filter(expense => expense.id !== expenses[1].id));
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Candy',
    note: '',
    createdAt: 0,
    amount: 95
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const id = expenses[0].id;
  const description = 'Bubble Gum';
  const action = { 
    type: 'EDIT_EXPENSE', 
    id, 
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state[0].description).toBe('Bubble Gum');
});

test('should not edit an expense if id not found', () => {
  const description = 'Bubble Gum';
  const action = { 
    type: 'EDIT_EXPENSE', 
    id: '-1', 
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});