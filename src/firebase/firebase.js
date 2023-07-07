import {
  initializeApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from './exports';

const firebaseConfig = {
  apiKey: 'AIzaSyAzhilCctdX9tbu4dggcF0sumux724valM',
  authDomain: 'friandy-47ea8.firebaseapp.com',
  projectId: 'friandy-47ea8',
  storageBucket: 'friandy-47ea8.appspot.com',
  messagingSenderId: '202950781133',
  appId: '1:202950781133:web:a6098987f57a9418466184',
  measurementId: 'G-2L054YW117',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const createNewAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
export const updateName = async (username) => {
  const autenticacao = getAuth(app);
  updateProfile(autenticacao.currentUser, {
    displayName: username,
  });
};

const provider = new GoogleAuthProvider();

export const entrarComGoogle = async () => signInWithPopup(auth, provider);

export const userLogout = () => signOut(auth);

export const checkAuthentication = (cb) => onAuthStateChanged(auth, cb);
