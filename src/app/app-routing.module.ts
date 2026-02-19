import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddformComponent } from './addform/addform.component';

const j: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListSuggestionComponent },
  { path: 'addform', component: AddformComponent },
  {
    path: 'annonce',
    loadChildren: () =>
      import('./annonce/annonce.module').then((m) => m.AnnonceModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(j)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
