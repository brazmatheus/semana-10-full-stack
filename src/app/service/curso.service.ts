import { Curso } from '../model/curso.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  urlBase: string = "http://localhost:8080/cursos/";
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
    
  findAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Curso>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Curso>(url);
  }

  //CREATE

  create(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.urlBase, curso); 
  }

  // UPDATE

  update(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(this.urlBase, curso);
  }
  
  // DELETE

  delete(curso : Curso): Observable<Curso> {
    let url = `${this.urlBase}/${curso.idCurso}`
    return this.http.delete<Curso>(url);
  }
}
