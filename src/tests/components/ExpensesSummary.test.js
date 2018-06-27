import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should display correctly for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should display correctly for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});