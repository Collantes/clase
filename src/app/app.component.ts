import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase';

  docente: string = 'Hitler Collantes';
  curso: string = 'Lenguaje de Programación II';

}
