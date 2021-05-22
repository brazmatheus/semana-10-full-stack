import { Professor } from './../model/professor.model';
import { Pessoa } from '../model/pessoa.model';
import { Disciplina } from '../model/disciplina.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  urlBase: string = "http://localhost:8080/professores/";
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
    
  findAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Professor>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Professor>(url);
  }

  //CREATE

  create(professor: Professor): Observable<Professor>{
    return this.http.post<Professor>(this.urlBase, professor); 
  }

  // UPDATE

  update(professor: Professor): Observable<Professor>{
    return this.http.put<Professor>(this.urlBase, professor);
  }
  
  // DELETE

  delete(professor : Professor): Observable<Professor> {
    let url = `${this.urlBase}/${professor.idProfessor}`
    return this.http.delete<Professor>(url);
  }
}
