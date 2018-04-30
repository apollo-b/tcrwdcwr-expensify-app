import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ 
        filters: altFilters 
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const event = {
        target: {
            value: altFilters.text
        }
    };
    wrapper.find('input').simulate('change', event);
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('should sort by date', () => {  
    const event = {
        target: {
            value: filters.sortBy
        }
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const event = {
        target: {
            value: altFilters.sortBy
        }
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const datesChange = {
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    };
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(datesChange);
    expect(setStartDate).toHaveBeenLastCalledWith(datesChange.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(datesChange.endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});