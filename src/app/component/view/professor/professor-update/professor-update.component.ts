import { Professor } from './../../../../model/professor.model';
import { PessoaService } from './../../../../service/pessoa.service';
import { ProfessorService } from './../../../../service/professor.service';
import { Escolaridade } from './../../../../enum/escolaridade.enum';
import { Pessoa } from './../../../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-update',
  templateUrl: './../professor-form/professor-form.component.html',
  styleUrls: ['./../professor-form/professor-form.component.css']
})
export class ProfessorUpdateComponent implements OnInit {

  
  titulo : string = "Alterar dados de Professor";
  professor: Professor = {
    pessoa: null,
    escolaridade : null,
  }

  pessoas: Pessoa[] = [];
  escolaridades = Escolaridade;

  constructor(
    private service: ProfessorService,
    private router: Router,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.pessoaService.findAll().subscribe(pessoas =>{
      this.pessoas = pessoas;
    });
    this.service.findById(id).subscribe(professor => {
      this.professor = professor;
      console.log(this.professor)
    });

    
  }
  salvar(): void {
      this.service.update(this.professor).subscribe(() =>{
        this.service.showMessage("Professor(a) alterado(a) com sucesso!");
        this.router.navigate(['/professor/list']);
      })
  }

}
