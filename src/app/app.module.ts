import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannComponent } from './annonce/listann/listann.component';
import { AddannComponent } from './annonce/addann/addann.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddformComponent } from './addform/addform.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListSuggestionComponent,
    NotfoundComponent,
    AddformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule, FormsModule, AnnonceModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
