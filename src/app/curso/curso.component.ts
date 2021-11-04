import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  listaCursos: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'PHP', 'Laravel'];

  habilitar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
