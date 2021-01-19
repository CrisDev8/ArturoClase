import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    path: 'home',
  },
  {
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
    path: 'news',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
