import { FormGroup, FormBuilder } from '@angular/forms';
import { Utilizador } from './../../utilizadores/utlizador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  utilizador: Utilizador = {
    Password: '',
    Nome: ''
  }

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nome: '',
      Password: ''
    });
  } 

  fazerLogin():void{

  }
}

