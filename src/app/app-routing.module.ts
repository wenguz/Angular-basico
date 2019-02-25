import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AgregarUsuarioComponent} from './admin/agregar-usuario/agregar-usuario.component';
import {ListarUsuarioComponent} from './admin/listar-usuario/listar-usuario.component';
import {ModificarUsuarioComponent} from './admin/modificar-usuario/modificar-usuario.component';


const app_routes:Routes=[
	{path:'agregar-usuario',component:AgregarUsuarioComponent},
	{path:'listar-usuario',component:ListarUsuarioComponent},
	{path:'modificar-usuario',component:ModificarUsuarioComponent},
	{path:'**',pathMatch:'full', redirectTo:''}
];

@NgModule({
	imports:[
		RouterModule.forRoot(app_routes)
	],
	exports:[
		RouterModule
	]
})
export class AppRoutingModule{

}