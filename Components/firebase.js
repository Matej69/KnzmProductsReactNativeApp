import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA_gQ_ZhQ4AXp055KFXCb3BlZJCcQ2mw8k",
  authDomain: "scrapedproducts.firebaseapp.com",
  databaseURL: "https://scrapedproducts.firebaseio.com",
  projectId: "scrapedproducts",
  storageBucket: "scrapedproducts.appspot.com",
  messagingSenderId: "804063685497"
};

export default !firebase.apps.length 
  ? firebase.initializeApp(config)
  : firebase.app();