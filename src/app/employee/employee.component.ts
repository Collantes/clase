import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../providers/services/employee.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modals/modal/modal.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any[];
  constructor(private employeeService: EmployeeService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.listar().subscribe(response => {
      this.employees = response.data || [];
    });
  }

  create(): any {
    const modal = this.modalService.open(ModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = "Nuevo";
    modal.result.then(response => {
      if (response.success) {
        console.log("Registro creado, lista actualizada");
        this.getEmployees();
      }
    }).catch(res => {});
  }

  update(item: any): any {
    console.log(item);
    const modal = this.modalService.open(ModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = "Modificar";
    modal.componentInstance.item = item;
    modal.result.then(response => {
      if (response.success) {
        console.log("Registro creado, lista actualizada");
        this.getEmployees();
      }
    }).catch(res => {});
  }
}
