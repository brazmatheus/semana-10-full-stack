import { Aluno } from './../model/aluno.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlBase: string = "http://localhost:8080/alunos/";
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
    
  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Aluno>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Aluno>(url);
  }

  //CREATE

  create(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.urlBase, aluno); 
  }

  // UPDATE

  update(aluno: Aluno): Observable<Aluno>{
    return this.http.put<Aluno>(this.urlBase, aluno);
  }
  
  // DELETE

  delete(aluno : Aluno): Observable<Aluno> {
    let url = `${this.urlBase}/${aluno.idAluno}`
    return this.http.delete<Aluno>(url);
  }
}
