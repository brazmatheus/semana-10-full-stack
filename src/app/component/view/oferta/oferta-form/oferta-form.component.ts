import { Professor } from './../../../../model/professor.model';
import { DisciplinaService } from './../../../../service/disciplina.service';
import { OfertaService } from './../../../../service/oferta.service';
import { Dia } from './../../../../enum/dia.enum';
import { ProfessorService } from './../../../../service/professor.service';
import { Oferta } from './../../../../model/oferta.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/model/disciplina.model';

@Component({
  selector: 'app-oferta-form',
  templateUrl: './oferta-form.component.html',
  styleUrls: ['./oferta-form.component.css']
})
export class OfertaFormComponent implements OnInit {

  titulo : string = "Cadastrar novo Professor";
  oferta: Oferta = {
    disciplina: null,
    professor: null,
    dia : null,
    dtInicio: null,
    dtFim: null
  }

  professores: Professor[] = [];
  disciplinas: Disciplina[] = [];
  dias = Dia;
  dtInicio: string;
  dtFim: string;

  constructor(
    private service : OfertaService,
    private disciplinaService : DisciplinaService,
    private professorService: ProfessorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.professorService.findAll().subscribe(professores =>{
      this.professores = professores;
    });

    this.disciplinaService.findAll().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  salvar(): void {
    this.oferta.dtInicio = new Date(this.dtInicio) ;
    this.oferta.dtFim = new Date(this.dtFim) ;
    
    this.service.create(this.oferta).subscribe(() =>{
      this.service.showMessage("Oferta cadastrada com sucesso.")
      this.router.navigate(['/oferta/list']);
    })
  }

}
