import { Disciplina } from './../model/disciplina.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  urlBase: string = "http://localhost:8080/disciplinas/";
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) { }

    showMessage(msg: string, isError: boolean = false): void{
      this.snackBar.open(msg,
        'Fechar',
        {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          duration: 3000,
          panelClass: isError ? ['msg-error'] : ['msg-sucess']
        })
    }

  // READ
    // FindAll
    
  findAll(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Disciplina>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Disciplina>(url);
  }

  //CREATE

  create(disciplina: Disciplina): Observable<Disciplina>{
    return this.http.post<Disciplina>(this.urlBase, disciplina); 
  }

  // UPDATE

  update(disciplina: Disciplina): Observable<Disciplina>{
    return this.http.put<Disciplina>(this.urlBase, disciplina);
  }
  
  // DELETE

  delete(disciplina : Disciplina): Observable<Disciplina> {
    let url = `${this.urlBase}/${disciplina.idDisciplina}`
    return this.http.delete<Disciplina>(url);
  }
}
