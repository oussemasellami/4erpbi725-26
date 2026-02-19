import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddannComponent } from './addann/addann.component';
import { ListannComponent } from './listann/listann.component';
import { AnnonceComponent } from './annonce.component';
import { AnnonceRoutingModule } from './annonce-routing.module';



@NgModule({
  declarations: [
      AnnonceComponent,
    ListannComponent,
    AddannComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
