
import { CursoService } from '../../../../service/curso.service';
import { Escolaridade } from '../../../../enum/escolaridade.enum';
import { Curso } from '../../../../model/curso.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-update',
  templateUrl: './../curso-form/curso-form.component.html',
  styleUrls: ['./../curso-form/curso-form.component.css']
})
export class CursoUpdateComponent implements OnInit {

  
  titulo : string = "Alterar dados de Curso";
  curso: Curso = {
    nmCurso: "",
    idCurso: null
  }

  cursos: Curso[] = [];
  escolaridades = Escolaridade;

  constructor(
    private service: CursoService,
    private router: Router,
    private cursoService: CursoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.cursoService.findAll().subscribe(cursos =>{
      this.cursos = cursos;
    });
    this.service.findById(id).subscribe(curso => {
      this.curso = curso;
      console.log(this.curso)
    });

    
  }
  salvar(): void {
      this.service.update(this.curso).subscribe(() =>{
        this.service.showMessage("Curso(a) alterado(a) com sucesso!");
        this.router.navigate(['/curso/list']);
      })
  }

}
