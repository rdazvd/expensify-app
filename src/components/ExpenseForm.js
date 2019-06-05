import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onAmountChange = (event) => {
    const amount = event.target.value

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onFocusChange = ({ focused }) => this.setState(() => ({ calendarFocused: focused }))

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }))
  }

  onSubmit = (event) =>  {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide both a description and an amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="description"
            type="text"
            value={this.state.description}
          />
          <input
            onChange={this.onAmountChange}
            placeholder="amount"
            type="number"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
