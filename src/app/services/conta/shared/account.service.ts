import { Utilizador } from './../../../components/utilizadores/utlizador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(form: FormGroup):void{
    this.http.post('', form.getRawValue())
  }
  
}
