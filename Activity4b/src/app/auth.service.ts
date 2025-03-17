import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | null = null; // Stores the user's role

  constructor() {
    // Simulating a user role (In a real app, fetch this from a backend or JWT token)
    this.userRole = localStorage.getItem('userRole') || 'user'; 
  }

  isAdmin(): boolean {
    return this.userRole === 'admin'; // Check if user role is 'admin'
  }

  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role); // Save role to localStorage (for persistence)
  }
}
