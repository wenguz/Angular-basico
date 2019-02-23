import { Component } from '@angular/core';

@Component({
	selector:'videojuegos',
	templateUrl:'./videojuegos.component.html'
})
export class VideojuegosComponent{
	public nombre:string ='Videojuegos 2019';
	public mejor_juego:string ='GTA 5';

	public mejor_juego_retro:string = 'Super Mario 64';
	public mostrar_retro:boolean = true;
	public color:string ="red";

	public year:number=2018;

	public videojuegos:Array<string> = [
		'Los simpson hit and run',
		'Assins creed',
		'GTA 5',
		'Call of Duty',
		'Tekken'
	];
}