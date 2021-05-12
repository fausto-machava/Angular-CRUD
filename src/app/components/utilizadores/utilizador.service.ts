import { Utilizador } from './utlizador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {

  baseUrl = "http://localhost:3001/utilizadores";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, time: number): void{
    this.snackBar.open(msg,'X',{
      duration: time,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(user: Utilizador): Observable<Utilizador>{
    return this.http.post<Utilizador>(this.baseUrl, user);
  }

  read():Observable<Utilizador[]>{
    return this.http.get<Utilizador[]>(this.baseUrl);
  }
}
