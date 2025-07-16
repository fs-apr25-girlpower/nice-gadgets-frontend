import { useEffect, useState } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from './firebase';
import { Loader } from './components/Loader/Loader';
import type { User } from 'firebase/auth';
export const googleAuthProvider = new GoogleAuthProvider();

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser != null) {
        setUser(maybeUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);

        if (!sessionStorage.getItem('authAttempted')) {
          sessionStorage.setItem('authAttempted', 'true');
          handleSignIn();
        }
      }
    });

    return unsubscribe;
  }, [auth]);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const credentials = await signInWithPopup(auth, googleAuthProvider);
      setUser(credentials.user);
    } catch (err) {
      console.error('Sign in error:', err);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem('authAttempted');
      setUser(null);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (user != null) {
    return (
      <div>
        <div>Привіт, {user.displayName}!</div>
        <button onClick={handleSignOut}>Вийти</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleSignIn}>Увійти через Google</button>
    </div>
  );
};
