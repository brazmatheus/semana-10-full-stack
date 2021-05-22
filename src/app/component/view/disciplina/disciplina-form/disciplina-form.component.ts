import { DisciplinaService } from './../../../../service/disciplina.service';
import { Disciplina } from './../../../../model/disciplina.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit {

  titulo : string = "Cadastrar nova Disciplina";
  disciplina: Disciplina = {
    nmDisciplina: "",
    cargaHoraria: null
  }


  constructor(
    private service: DisciplinaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  salvar(): void {
    this.service.create(this.disciplina).subscribe(() =>{
      this.service.showMessage("Disciplina cadastrada com sucesso.")
      this.router.navigate(['/disciplina/list']);
    })
  }

}
