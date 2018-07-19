import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrt43Ivwxr_K3HNbWyRWsbn5hiRkP9PF8",
    authDomain: "expensify-45803.firebaseapp.com",
    databaseURL: "https://expensify-45803.firebaseio.com",
    projectId: "expensify-45803",
    storageBucket: "expensify-45803.appspot.com",
    messagingSenderId: "834443775074"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  // Setup 'expenses' with three items (desc, note, amount, createdAt)
  // Set up with 3 push calls
  const expenses = [{
      desc: "item 1",
      note: "note 1",
      amount: 11,
      createdAt: 111,
  }, {
    desc: "item 2",
    note: "note 2",
    amount: 22,
    createdAt: 222
}, {
    desc: "item 3",
    note: "note 3",
    amount: 33,
    createdAt: 333
}];
database.ref('notes').set(null);
database.ref('notes').push(expenses[0]);
database.ref('notes').push(expenses[1]);
database.ref('notes').push(expenses[2]);


//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });

//   database.ref('notes/-LHiYnEkfNMLuqSgdo1V').update({
//       body: 'Whatttt'
//   });