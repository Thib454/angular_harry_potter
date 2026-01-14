import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = signal(true); // Par défaut, l'utilisateur est connecté

  isAuthenticated() {
    return this.isLoggedIn();
  }

  login () {
    // Implementation of logic.
    this.isLoggedIn.set(true);
  }

  logout () {
    // Implementation of logic.
    this.isLoggedIn.set(false);
  }
}