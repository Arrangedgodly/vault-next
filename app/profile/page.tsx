'use client'

import {auth} from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!user) {
    return <p>Not logged in</p>;
  }
  return (
    <div>
      <p>Logged in as {user.email}</p>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}