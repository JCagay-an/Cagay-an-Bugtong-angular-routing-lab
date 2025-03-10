import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; 
    if (!isAdmin) {
      alert('Access Denied! You need admin privileges.');
      this.router.navigate(['/home']);
      return false;
    }
    return true; 
  }
}
