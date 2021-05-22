import { AlunoService } from '../../../../service/aluno.service';
import { Aluno } from '../../../../model/aluno.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';
import { Observable } from 'rxjs/internal/Observable';
import { CursoService } from 'src/app/service/curso.service';
import { Curso } from 'src/app/model/curso.model';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  titulo : string = "Cadastrar nova Aluno";
  pessoas: Pessoa[];
  cursos: Curso[];
  aluno: Aluno = {
    dtInicio: null,
    ativo: null,
    curso: null,
    pessoa: null,
  }


  constructor(
    private service: AlunoService,
    private router: Router,
    private pessoaService: PessoaService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.pessoaService.findAll().subscribe((result) => {
      this.pessoas = result;
    });
    this.cursoService.findAll().subscribe((result) => {
      this.cursos = result;
    });
  }


  salvar(): void {
    console.log("this.aluno salvar", this.aluno)
    this.service.create(this.aluno).subscribe(() =>{
      this.service.showMessage("Aluno cadastrada com sucesso.")
      this.router.navigate(['/aluno/list']);
    })
  }

}
