// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyB109eimt09gf-JoHw_BWHswglh3MFAIm8',
  authDomain: 'ecocart-95cc7.firebaseapp.com',
  projectId: 'ecocart-95cc7',
  storageBucket: 'ecocart-95cc7.firebasestorage.app',
  messagingSenderId: '882371969289',
  appId: '1:882371969289:web:29d63e7cae1c1aa46d93d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
