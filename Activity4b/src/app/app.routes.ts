import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, children: [{ path: 'profile', component: ProfileComponent }] },
  { path: 'contact', component: ContactComponent },

  { 
    path: 'admin', 
    canActivate: [AdminGuard], 
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminComponent },
      { path: 'users', component: AdminComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent },
      { path: '', redirectTo: 'child-one', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'home' }
];
