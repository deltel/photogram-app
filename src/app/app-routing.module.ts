import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts/new', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users/userId', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //redirect to home page
  { path: '**', component: HomeComponent } // set up a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
