import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD6RnFQlDIwrSzYs91nzKkMQd6qF8rV6wk",
    authDomain: "miniproject-bit-02.firebaseapp.com",
    databaseURL: "https://miniproject-bit-02-default-rtdb.firebaseio.com",
    projectId: "miniproject-bit-02",
    storageBucket: "miniproject-bit-02.appspot.com",
    messagingSenderId: "285463373595",
    appId: "1:285463373595:web:d2e224e227a7d2c08fd5be",
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);


  export{app, firestore, storage};