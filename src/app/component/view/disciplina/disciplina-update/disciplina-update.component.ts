import { Disciplina } from './../../../../model/disciplina.model';
import { DisciplinaService } from './../../../../service/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-update',
  templateUrl: './../disciplina-form/disciplina-form.component.html',
  styleUrls: ['./../disciplina-form/disciplina-form.component.css']
})
export class DisciplinaUpdateComponent implements OnInit {

  disciplina : Disciplina;

  titulo : string = "Alterar Dados de Disciplina";
  constructor(
    private route: ActivatedRoute,
    private service: DisciplinaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(disciplina => {
      this.disciplina = disciplina;
    });

    
  }
  salvar(): void {
      this.service.update(this.disciplina).subscribe(() =>{
        this.service.showMessage("Disciplina alterada com sucesso!");
        this.router.navigate(['/disciplina/list']);
      })
  }
}
