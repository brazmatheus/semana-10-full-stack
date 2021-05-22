import { Aluno } from '../../../../model/aluno.model';
import { AlunoService } from '../../../../service/aluno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';
import { PessoaService } from 'src/app/service/pessoa.service';
import { Curso } from 'src/app/model/curso.model';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './../aluno-form/aluno-form.component.html',
  styleUrls: ['./../aluno-form/aluno-form.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno : Aluno;
  pessoas: Pessoa[];
  cursos: Curso[];

  titulo : string = "Alterar Dados de Aluno";
  constructor(
    private route: ActivatedRoute,
    private service: AlunoService,
    private router: Router,
    private pessoaService: PessoaService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(aluno => {
      this.aluno = aluno;
    });
    this.pessoaService.findAll().subscribe((result) => {
      this.pessoas = result;
    });
    this.cursoService.findAll().subscribe((result) => {
      this.cursos = result;
    });
  }
  salvar(): void {
      this.service.update(this.aluno).subscribe(() =>{
        this.service.showMessage("Aluno alterada com sucesso!");
        this.router.navigate(['/aluno/list']);
      })
  }
}
