import { UtilizadorService } from './../utilizador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilizador } from '../utlizador.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  utilizador: Utilizador ={
    Nome: '',
    Password: ''
  }
  ConfiramarPassword!: String;

  constructor(private router: Router, private UtilizadorService: UtilizadorService) { }

  ngOnInit(): void {
  }

  createUser():void{
    if(this.ConfiramarPassword == this.utilizador.Password){
      this.UtilizadorService.create(this.utilizador).subscribe(()=>{
        this.UtilizadorService.showMessage('Criado com sucesso!', 3000);
        this.router.navigate(['/users'])
      });
    }
    else{
      this.UtilizadorService.showMessage('A palavra passe não corresponde a inserida no campo anterior!', 6000);
    }
  }

  cancel(): void{
    this.router.navigate(['/users'])
  }
}
