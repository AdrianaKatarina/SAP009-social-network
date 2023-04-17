export const getAuth = jest.fn();
export const initializeApp = jest.fn();
export const getFirestore = jest.fn();

export const GoogleAuthProvider = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithPopup = jest.fn(() => true);
export const onAuthStateChanged = jest.fn();
export const signOut = jest.fn();

export const collection = jest.fn();
export const addDoc = jest.fn();
export const deleteDoc = jest.fn();
export const doc = jest.fn();
export const updateDoc = jest.fn();
