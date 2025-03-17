import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | null = null;

  constructor() {
    this.userRole = localStorage.getItem('userRole') || 'user'; 
  }

  isAdmin(): boolean {
    console.log('AuthService.isAdmin() called - returning TRUE for demo');
    return false;
    }

  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }
}
