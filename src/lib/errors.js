export const firebaseError = (error) => {
  const errorCode = error.code;
  if (errorCode === 'auth/user-not-found') {
    return 'Usuário não encontrado.';
  }
  if (errorCode === 'auth/wrong-password') {
    return 'Senha incorreta';
  }
  if (errorCode === 'auth/internal-error' || errorCode === 'auth/invalid-email') {
    return 'Confira seus dados';
  }
  if (errorCode === 'auth/email-already-in-use') {
    return 'Email já em uso.';
  } 
  if (errorCode === 'auth/weak-password') {
    return 'A senha deve ter pelo menos 6 caracteres';
  }
  return errorCode;
}