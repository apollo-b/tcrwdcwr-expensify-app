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

  database.ref().set(
    {
        name: 'Apollo Board',
        age: 39,
        stressLevel: 6,
        job: {
          title: 'Software Developer',
          company: 'Google'
        },
        isSingle: true,
        location: {
            city: 'St. Louis',
            country: 'United States'
        }
    }
).then(()=>{
    console.log('Data is saved.');
}).catch((e)=>{
    console.log('This failed.', e)
});

// Change the stresslevel to a 9
// Change the job.company to Amazon
// Change location.city to Seattle
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref('isSingle')
//     .remove()
//     .then(() => console.log('Value removed 1.'))
//     .catch((e)=> console.log('No data removed.', e));