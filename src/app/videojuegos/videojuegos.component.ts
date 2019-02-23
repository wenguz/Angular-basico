import { Component } from '@angular/core';

@Component({
	selector:'videojuegos',
	template:`
		<h2>Componente de {{nombre}}</h2>
		<h3 *ngIf="mostrar_retor!=true">El mejor juego es: {{mejor_juego}}</h3>
		<h3 [style.background]="yellow"
			*ngIf="mostrar_retor">
			El mejor juego es: {{mejor_juego_retro}}
		</h3>
	`
})
export class VideojuegosComponent{
	public nombre='Videojuegos 2019';
	public mejor_juego='GTA 5';

	public mejor_juego_reto='Super Mario 64';
	public mostrar_retro=true;
}