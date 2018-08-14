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

  // child_removed
  database.ref('notes').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  database.ref('notes').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  database.ref('notes').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
// database.ref('notes').on('value', (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });
