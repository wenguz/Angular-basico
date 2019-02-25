import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AgregarUsuarioComponent} from './admin/agregar-usuario/agregar-usuario.component';

const app_routes:Routes=[
	{path:'agregar-usuario',component:AgregarUsuarioComponent},
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