import { Escolaridade } from '../../../../enum/escolaridade.enum';
import { CursoService } from '../../../../service/curso.service';
import { Curso } from '../../../../model/curso.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {


  titulo : string = "Cadastrar novo Curso";
  curso: Curso = {
    nmCurso: "",
    idCurso: null
  }

  cursos: Curso[] = [];
  escolaridades = Escolaridade;

  constructor(
    private service: CursoService,
    private router: Router,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursoService.findAll().subscribe(cursos =>{
      this.cursos = cursos;
    });
  }


  salvar(): void {
    console.log(this.curso)
    this.service.create(this.curso).subscribe(() =>{
      this.service.showMessage("Curso cadastrado com sucesso.")
      this.router.navigate(['/curso/list']);
    })
  }

}
