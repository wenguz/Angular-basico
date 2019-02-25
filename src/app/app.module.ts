import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { HeaderComponent } from './compartido/header/header.component';
import { MenuComponent } from './compartido/menu/menu.component';
import { AgregarUsuarioComponent } from './admin/agregar-usuario/agregar-usuario.component';
import { MainHeaderComponent } from './compartido/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    HeaderComponent,
    MenuComponent,
    AgregarUsuarioComponent,
    MainHeaderComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
