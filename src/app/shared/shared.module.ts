import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';


const COMPONENTS = [
  NavComponent,
  SpinnerComponent,
  SearchComponent,
  CharactersListComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
