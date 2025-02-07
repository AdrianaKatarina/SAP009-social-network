export const getAuth = jest.fn();
export const initializeApp = jest.fn();
export const getFirestore = jest.fn();

export const GoogleAuthProvider = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithPopup = jest.fn();
export const onAuthStateChanged = jest.fn();
export const signOut = jest.fn();
export const updateProfile = jest.fn();

export const collection = jest.fn();
export const addDoc = jest.fn();
export const deleteDoc = jest.fn();
export const doc = jest.fn();
export const updateDoc = jest.fn();
export const getDoc = jest.fn();
export const onSnapshot = jest.fn();
export const query = jest.fn();
export const orderBy = jest.fn();
export const arrayUnion = jest.fn();
export const arrayRemove = jest.fn();
