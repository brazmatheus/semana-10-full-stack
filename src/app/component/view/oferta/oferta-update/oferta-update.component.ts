import { ProfessorService } from './../../../../service/professor.service';
import { DisciplinaService } from './../../../../service/disciplina.service';
import { OfertaService } from './../../../../service/oferta.service';
import { Dia } from './../../../../enum/dia.enum';
import { Professor } from './../../../../model/professor.model';
import { Oferta } from './../../../../model/oferta.model';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oferta-update',
  templateUrl: './../oferta-form/oferta-form.component.html',
  styleUrls: ['./../oferta-form/oferta-form.component.css']
})
export class OfertaUpdateComponent implements OnInit {

 
  titulo : string = "Alterar dados da oferta";
  oferta: Oferta;

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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.professorService.findAll().subscribe(professores =>{
      this.professores = professores;
    });

    this.disciplinaService.findAll().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });

    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(oferta => {
      this.oferta = oferta;
      this.dtInicio = oferta.dtInicio.toString().substr(0, 10);
      this.dtFim = oferta.dtFim.toString().substr(0, 10);
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
