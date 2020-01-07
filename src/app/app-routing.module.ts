import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        m => m.CharactersModule
      )
  },
  {
    path: 'houses',
    loadChildren: () =>
      import('./pages/houses/houses.module').then(m => m.HousesModule)
  },
  {
    path: 'timeline',
    loadChildren: () =>
      import('./pages/timeline/timeline.module').then(m => m.TimelineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
