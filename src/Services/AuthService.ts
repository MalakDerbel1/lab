import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('Google sign-in successful:', result);
        return result; // You can return user information
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
        throw error; // Rethrow error to handle it in the UI
      });

  }

  signOut() {
    return this.afAuth.signOut()
      .then(() => console.log('User signed out'))
      .catch((error) => console.error('Sign-out error:', error));
  }
}
