import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-basico';
  descripcion='propiedad del componente nueva.Se agrega en app.components.ts y esta variable se mostrara en la vista app.component.html con {{}}';
}
