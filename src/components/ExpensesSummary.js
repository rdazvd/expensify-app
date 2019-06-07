import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const formatAmount = (amount) => numeral(amount / 100).format('$0,0.00');
const formatExpenseWord = (expenseCount) => expenseCount === 1 ? 'expense ' : 'expenses ';

const ExpensesSummary = ({expenseCount, expensesTotal}) => (
  <div>
    <h1>
      Viewing { expenseCount } { formatExpenseWord(expenseCount) } 
      totalling { formatAmount(expensesTotal) }
    </h1>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export { ExpensesSummary };
export default connect(mapStateToProps)(ExpensesSummary);