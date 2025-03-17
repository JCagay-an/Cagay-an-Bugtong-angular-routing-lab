import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.userRole = localStorage.getItem('userRole') || 'user';
    } else {
      this.userRole = 'user';
    }
  }

  isAdmin(): boolean {
    console.log('AuthService.isAdmin() called - returning TRUE for demo');
    return true;
  }

  setRole(role: string): void {
    this.userRole = role;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userRole', role);
    }
  }
}
