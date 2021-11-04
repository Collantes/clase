import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule, Routes} from "@angular/router";
import { CursoComponent } from './curso/curso.component';
import {EmployeeService} from "./providers/services/employee.service";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './employee/modals/modal/modal.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {DepartamentService} from "./providers/services/departament.service";
import { DepartamentComponent } from './departament/departament.component';
import { FormModalComponent } from './departament/modals/form-modal/form-modal.component';

const routes: Routes = [
  {path: '', redirectTo: '/cursos', pathMatch: 'full'},
  {path: 'empleados', component: EmployeeComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'departamentos', component: DepartamentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    CursoComponent,
    ModalComponent,
    DepartamentComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService,DepartamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
