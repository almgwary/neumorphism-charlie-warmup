import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/guards/auth.guard';


const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule) },
  { path: 'dashboard',
    canActivate: [ AuthGuard ] ,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/dashboard', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
