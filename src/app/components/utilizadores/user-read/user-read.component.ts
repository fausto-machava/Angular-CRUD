import { Utilizador } from './../utlizador.model';
import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from '../utilizador.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  utilizadores!: Utilizador[];
  displayedColumns = ['Id', 'Name', 'Price', 'Action'];
  //Head = ['Id','Name','Price'];

  constructor(private UtilizadorService: UtilizadorService) { }

  ngOnInit(): void {
    this.UtilizadorService.read().subscribe(users => {
      this.utilizadores = users;
    })
  }

}
