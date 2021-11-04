import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../providers/services/employee.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modals/modal/modal.component";
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Registrado',
          text: response.message,
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000
        });
        this.getEmployees();
      }
    }).catch(res => {});
  }

  update(item: any): any {
    const modal = this.modalService.open(ModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    console.log(item);
    modal.componentInstance.title = "Modificar";
    modal.componentInstance.item = item;
    modal.result.then(response => {
      if (response.success) {
        Swal.fire({
          title: 'Modificado',
          text: response.message,
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000
        });
        this.getEmployees();
      }
    }).catch(res => {});
  }

  delete(id: string): any {
    Swal.fire({
      title: '¿Desea Eliminar?',
      text: "Se eliminará el registro...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Confirmar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.eliminar(id).subscribe(data => {
          if(data.success){
            Swal.fire({
              title: 'Eliminado',
              text: data.message,
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false,
              timer: 2000
            });
            this.getEmployees();
          }
        });
      }
    })
  }
}
