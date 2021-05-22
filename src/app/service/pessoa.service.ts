import { Pessoa } from './../model/pessoa.model';
import { Disciplina } from '../model/disciplina.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlBase: string = "http://localhost:8080/pessoas/";
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
    
  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Pessoa>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  //CREATE

  create(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.urlBase, pessoa); 
  }

  // UPDATE

  update(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.put<Pessoa>(this.urlBase, pessoa);
  }
  
  // DELETE

  delete(pessoa : Pessoa): Observable<Pessoa> {
    let url = `${this.urlBase}/${pessoa.idPessoa}`
    return this.http.delete<Pessoa>(url);
  }
}
