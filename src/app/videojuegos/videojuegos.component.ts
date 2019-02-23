import { Component } from '@angular/core';

@Component({
	selector:'videojuegos',
	templateUrl:'./videojuegos.component.html'
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