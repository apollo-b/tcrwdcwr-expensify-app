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

  firebase.database().ref().set(
    {
        name: 'Apollo Board'
    }
);