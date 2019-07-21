import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANqV2W7FcpdlzILF6F4o1UDhNL5DszGXM",
    authDomain: "real-estate12.firebaseapp.com",
    databaseURL: "https://real-estate12.firebaseio.com",
    projectId: "real-estate12",
    storageBucket: "real-estate12.appspot.com",
    messagingSenderId: "702784695417",
    appId: "1:702784695417:web:e1b249aea36f7936"
};

firebase.initializeApp(firebaseConfig);

export default firebase