import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNotaComponent } from './card-nota/card-nota.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { NotaDetalleComponent } from './nota-detalle/nota-detalle.component';
import { FormNotaComponent } from './form-nota/form-nota.component';



@NgModule({
  declarations: [
    AppComponent,
    CardNotaComponent,
    ColorSelectorComponent,
    ListaNotasComponent,
    FormNotaComponent,
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
