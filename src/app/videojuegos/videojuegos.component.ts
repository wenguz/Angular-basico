import { Component } from '@angular/core';

@Component({
	selector:'videojuegos',
	template:`
		<h2>Componente de {{nombre}}</h2>
		<h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
		<h3 [style.background]="color"
			*ngIf="mostrar_retro">
			El juego retro: {{mejor_juego_retro}}
		</h3>

		<h2>Listado de videojuegos</h2>
		<ul>
			<li>{{videojuegos[3]}}</li>
		</ul>
	`
})
export class VideojuegosComponent{
	public nombre='Videojuegos 2019';
	public mejor_juego='GTA 5';

	public mejor_juego_retro = 'Super Mario 64';
	public mostrar_retro = true;
	public color="red";

	public videojuegos = [
		'Los simpson hit and run',
		'Assins creed',
		'GTA 5',
		'Call of Duty',
		'Tekken'
	];
}