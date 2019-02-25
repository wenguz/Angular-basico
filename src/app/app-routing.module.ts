import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AgregarUsuarioComponent} from './admin/agregar-usuario/agregar-usuario.component';
import {ListarUsuarioComponent} from './admin/listar-usuario/listar-usuario.component';
import {ModificarUsuarioComponent} from './admin/modificar-usuario/modificar-usuario.component';
import {VerPerfilComponent} from './admin/ver-perfil/ver-perfil.component';
import {InicioComponent} from './admin/inicio/inicio.component';
import {RepAtencionComponent} from './admin/rep-atencion/rep-atencion.component';
import {RepDocumentoComponent} from './admin/rep-documento/rep-documento.component';
import {RepEdadComponent} from './admin/rep-edad/rep-edad.component';
import { RepOcupacionComponent } from './admin/rep-ocupacion/rep-ocupacion.component';
import { RepOrigenComponent  } from './admin/rep-origen/rep-origen.component';
import { RepProblematicaComponent } from './admin/rep-problematica/rep-problematica.component';
import { EncabezadoRepComponent } from './admin/encabezado-rep/encabezado-rep.component';

const app_routes:Routes=[
	{path:'agregar-usuario',component:AgregarUsuarioComponent},
	{path:'listar-usuario',component:ListarUsuarioComponent},
	{path:'modificar-usuario',component:ModificarUsuarioComponent},
	{path:'ver-perfil',component:VerPerfilComponent},
	{path:'inicio-admin',component:InicioComponent},
	{path:'rep-atencion',component:RepAtencionComponent},
	{path:'rep-documento',component:RepDocumentoComponent},
	{path:'rep-edad',component:RepEdadComponent},
	{path:'rep-ocupacion',component:RepOcupacionComponent},
	{path:'rep-origen',component:RepOrigenComponent},
	{path:'rep-problematica',component:RepProblematicaComponent},
	{path:'encabezado-rep',component:EncabezadoRepComponent},
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