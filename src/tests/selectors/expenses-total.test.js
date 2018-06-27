import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

// should return 0 if no expenses
test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    // console.log('Result is: ' + result);
    expect(result).toBe(0);
});
// should correctly add up a single expense
test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[1]]);
    // console.log('Result is: ' + result);
    expect(result).toBe(expenses[1].amount);
});
// should correctly add up multiple expenses
test('should correctly add up multiple expenses', () => {
    const total = 114195; // pre-calculated from fixtures/expenses 1-3
    const result = selectExpensesTotal(expenses);
    // console.log('Result is: ' + result);
    expect(result).toBe(total);
});