import { Escolaridade } from './../../../../enum/escolaridade.enum';
import { Pessoa } from './../../../../model/pessoa.model';
import { PessoaService } from './../../../../service/pessoa.service';
import { ProfessorService } from './../../../../service/professor.service';
import { Professor } from './../../../../model/professor.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {


  titulo : string = "Cadastrar novo Professor";
  professor: Professor = {
    pessoa: null,
    escolaridade : null,
  }

  pessoas: Pessoa[] = [];
  escolaridades = Escolaridade;

  constructor(
    private service: ProfessorService,
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.pessoaService.findAll().subscribe(pessoas =>{
      this.pessoas = pessoas;
    });
  }


  salvar(): void {
    console.log(this.professor)
    this.service.create(this.professor).subscribe(() =>{
      this.service.showMessage("Professor cadastrado com sucesso.")
      this.router.navigate(['/professor/list']);
    })
  }

}
