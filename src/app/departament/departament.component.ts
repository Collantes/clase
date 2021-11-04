import { Component, OnInit } from '@angular/core';
import {DepartamentService} from "../providers/services/departament.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormModalComponent} from "./modals/form-modal/form-modal.component";

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit {

  departaments: any[];
  constructor(private departamentService: DepartamentService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getDepartaments();
  }

  getDepartaments(): void {
    this.departamentService.listar().subscribe(response => {
      this.departaments = response.data || [];
    });
  }

  create(): any {
    const modal = this.modalService.open(FormModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = "Nuevo";
    modal.result.then(response => {
      if (response.success) {
        this.getDepartaments();
      }
    }).catch(res => {});
  }

  update(item: any): any {

  }

}
