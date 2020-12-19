import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

export interface User {
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public firestore: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.firestore.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem("user"));
      } else {
        localStorage.setItem("user", null);
        JSON.parse(localStorage.getItem("user"));
      }
    });
  }

  // Sign in with email/password
  signIn(email, password) {
    return this.firestore
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null ? true : false;
  }

  // Auth logic to run auth providers
  authLogin(provider) {
    return this.firestore
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(["/"]);
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  signOut() {
    return this.firestore.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["auth"]);
    });
  }
}
