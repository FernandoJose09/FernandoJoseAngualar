import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './layout/components/home/home.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { RegistroComponent } from './modules/registro/registro.routes';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  {
    path: 'modulo-uno',
    component: HomeComponent,
    children:[
      { path: '',  loadChildren: () => import('./modules/module-uno/module-uno-routing.module').then(m => m.ModuleUnoRoutingModule)},
    ]
  },
  {
    path: 'modulo-dos',
    component: HomeComponent,
    children:[
      { path: '',  loadChildren: () => import('./modules/module-dos/module-dos-routing.module').then(m => m.ModuleDosRoutingModule)},
    ]
  },
  {
    path: 'modulo-tres',
    component: HomeComponent,
    children:[
      { path: '',  loadChildren: () => import('./modules/module-tres/module-tres-routing.module').then(m => m.ModuleTresRoutingModule)},
    ]

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
