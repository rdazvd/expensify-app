import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const formatAmount = (amount) => numeral(amount / 100).format('$0,0.00');
const formatExpenseWord = (expenseCount) => expenseCount === 1 ? 'expense ' : 'expenses ';

const ExpensesSummary = ({expenseCount, expensesTotal}) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{ expenseCount }</span> { formatExpenseWord(expenseCount) }
        totalling <span>{ formatAmount(expensesTotal) }</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
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