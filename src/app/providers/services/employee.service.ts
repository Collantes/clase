import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResponse} from "../utils/IResponse";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = "http://localhost:8080/api/employee";

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.apiUrl);
  }

  public guardar(data: any): Observable<IResponse> {
    return this.httpClient.post<IResponse>(this.apiUrl, data);
  }

  public modificar(id: string, data: any): Observable<IResponse> {
    return this.httpClient.put<IResponse>(`${this.apiUrl}/${id}`, data); // ALT + 96 `
  }

  public eliminar(id: string): Observable<IResponse> {
    return this.httpClient.delete<IResponse>(`${this.apiUrl}/${id}`);
  }
}
