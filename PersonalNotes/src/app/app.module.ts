import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNotaComponent } from './card-nota/card-nota.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNotaComponent,
    ColorSelectorComponent,
    ListaNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
