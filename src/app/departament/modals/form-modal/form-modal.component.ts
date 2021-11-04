import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DepartamentService} from "../../../providers/services/departament.service";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  @Input() title: any;
  formDepartamento: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private departamentService: DepartamentService) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): any {
    const controls = {
      depaNombre: ['', [Validators.required]],
      depaAbreviatura: ['', [Validators.required]],
      depaEstado: [true]
    };
    this.formDepartamento = this.formBuilder.group(controls);
  }

  save(): any {
    this.departamentService.guardar(this.formDepartamento.value).subscribe( response => {
      if(response.success) {
        this.activeModal.close({success: true});
      }
    });
  }

}
