import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects/projects';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'profile' }
];
