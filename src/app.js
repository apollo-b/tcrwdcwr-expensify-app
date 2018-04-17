import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize'; // required for react-dates@13.0.0+
import 'react-dates/lib/css/_datepicker.css'; // react-with-styles after react-dates@13.0.0

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const water = store.dispatch(addExpense({description: 'Water bill', amount: 12000}));
const gas = store.dispatch(addExpense({description: 'Gas bill', amount: 3000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 73000}));

// setTimeout(() => {
//     store.dispatch(setTextFilter('gas'));
// }, 3000)

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
