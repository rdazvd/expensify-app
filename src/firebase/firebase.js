import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   amount: 5600,
//   createdAt: 344563465,
//   description: 'Phone bill',
//   note: ''
// });

// database.ref('expenses').push({
//   description: 'water bill',
//   amount: 50,
//   note: '',
//   createdAt: 1234
// });

// const firebaseNotes = {
//   notes: {
//     note1: {
//       title: 'first note',
//       body: 'first note body'
//     },
//     note2: {
//       title: 'first note',
//       body: 'first note body'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'this is my note'
// }, {
//   id: '13',
//   title: 'second note',
//   body: 'this is another note'
// }];

// database.ref('notes').set(notes);

// database.ref()
//   .on('value', 
//     (snapshot) => console.log(
//       `${snapshot.val().name} is a ${snapshot.val().job.title} @ ${snapshot.val().job.company}`
//     ),
//     (error) => console.log('an error occurred', error)
//   );

// setTimeout(() => database.ref('age').set(29), 3500);
// setTimeout(() => database.ref('age').off(onValueChange), 7000);
// setTimeout(() => database.ref('age').set(30), 10500);


// database.ref('location')
//   .once('value')
//   .then((snapshot) => console.log(snapshot.val()))
  // .catch((error) => console.log('Error fetching data', error));

// database.ref().set({
//   name: 'Rafael de Azevedo',
//   age: 34,
//   job: {
//     title: 'software engineer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   location: {
//     city: 'São Paulo',
//     country: 'Brazil'
//   }
// }).then(() => 
//   console.log('data is saved')
// ).catch((error) => 
//   console.log('This failed.', error)
// );

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   location: {
//     city: 'Seattle',
//     country: 'United States'
//   }
// });

// database.ref('isSingle')
//   .remove()
//   .then(() =>
//     console.log('data removed.')
//   ).catch((error) =>
//     console.log('Did not remove data', error)
//   );