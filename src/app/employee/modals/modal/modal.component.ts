import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../providers/services/employee.service";
import {DepartamentService} from "../../../providers/services/departament.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  departaments: any[];
  formEmpleado: FormGroup;
  @Input() title: any;
  @Input() item: any;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private departamentService: DepartamentService) { }

  ngOnInit(): void {
    this.formInit();
    this.getDepartaments();
    if (this.item) {
      this.updateData();
    } else {
      this.item = [];
    }
  }

  private formInit(): any {
    const controls = {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
      phoneNumber: [''],
      hireDate: [''],
      salary: [''],
      commissionPct: [''],
      depaId: ['', [Validators.required]]
    };
    this.formEmpleado = this.formBuilder.group(controls);
  }

  getDepartaments(): void {
    this.departamentService.listar().subscribe(response => {
      this.departaments = response.data || [];
    }, () => {
      console.log("Error...");
    }, () => {
      /*setTimeout(() => {
        this.formEmpleado.patchValue({
          depaId: this.item.depaId
        });
      }, 1000);*/
    });
  }

  save(data: any): any {
    const save: any = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      hireDate: data.hireDate,
      salary: data.salary,
      commissionPct: data.commissionPct,
      departament: {
        depaId: data.depaId
      }
    };
    this.employeeService.guardar(save).subscribe( response => {
      if(response.success) {
        this.activeModal.close({success: true});
      }
    });
  }

  updateData(): any {
    const data = this.item;
    this.formEmpleado.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      hireDate: data.hireDate,
      salary: data.salary,
      commissionPct: data.commissionPct,
      depaId: data.depaId,
    });

  }
  // firstName, lastName, email
  validaForm(campo: string): any {
    return this.formEmpleado.controls[campo].errors &&
      this.formEmpleado.controls[campo].touched;
  }
}
