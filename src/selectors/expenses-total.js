// return sum of amount fields from an array of expense objects
export default (expenseArray = []) => {
    return expenseArray.reduce(((sum, expense) => sum + expense.amount), 0);
};