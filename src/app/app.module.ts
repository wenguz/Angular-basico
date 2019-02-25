import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { HeaderComponent } from './compartido/header/header.component';
import { MenuComponent } from './compartido/menu/menu.component';
import { AgregarUsuarioComponent } from './admin/agregar-usuario/agregar-usuario.component';
import { MainHeaderComponent } from './compartido/main-header/main-header.component';
import { ListarUsuarioComponent } from './admin/listar-usuario/listar-usuario.component';
import { ModificarUsuarioComponent } from './admin/modificar-usuario/modificar-usuario.component';
import { VerPerfilComponent } from './admin/ver-perfil/ver-perfil.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { RepAtencionComponent } from './admin/rep-atencion/rep-atencion.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    HeaderComponent,
    MenuComponent,
    AgregarUsuarioComponent,
    MainHeaderComponent,
    ListarUsuarioComponent,
    ModificarUsuarioComponent,
    VerPerfilComponent,
    InicioComponent,
    RepAtencionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
