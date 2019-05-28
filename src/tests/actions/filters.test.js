import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate setTextFilter action object containing passed data', () => {
  const action = setTextFilter('Text Filter');
  
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    textFilter: 'Text Filter'
  });
});

test('should generate setTextFilter action object with default data', () => {
  const action = setTextFilter();
  
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    textFilter: ''
  });
});

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});