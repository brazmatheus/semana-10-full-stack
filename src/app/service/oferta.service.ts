import { Oferta } from './../model/oferta.model';
import { Disciplina } from '../model/disciplina.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  urlBase: string = "http://localhost:8080/ofertas/";
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
    
  findAll(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.urlBase);
  } 
// FindById

  findById(id: string): Observable<Oferta>{
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Oferta>(url);
  }

  //CREATE

  create(oferta: Oferta): Observable<Oferta>{
    return this.http.post<Oferta>(this.urlBase, oferta); 
  }

  // UPDATE

  update(oferta: Oferta): Observable<Oferta>{
    return this.http.put<Oferta>(this.urlBase, oferta);
  }
  
  // DELETE

  delete(oferta : Oferta): Observable<Oferta> {
    let url = `${this.urlBase}/${oferta.idOferta}`
    return this.http.delete<Oferta>(url);
  }
}
