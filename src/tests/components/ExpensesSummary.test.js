import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

let wrapper;

beforeEach(() => wrapper = shallow(<ExpensesSummary />));

test('should render ExpensesSummary correctly with 1 expense', () => {
  wrapper.setProps({ expenseCount:1, expensesTotal: 235 });
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  wrapper.setProps({ expenseCount: 12, expensesTotal: 123500 });
  expect(wrapper).toMatchSnapshot();
});