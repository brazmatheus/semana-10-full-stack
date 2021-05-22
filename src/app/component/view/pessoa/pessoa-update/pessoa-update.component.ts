import { FormatDatePipe } from './../../../../util/pipe/format-date.pipe';
import { PessoaService } from './../../../../service/pessoa.service';
import { DisciplinaService } from './../../../../service/disciplina.service';
import { Pessoa } from './../../../../model/pessoa.model';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './../pessoa-form/pessoa-form.component.html',
  styleUrls: ['./../pessoa-form/pessoa-form.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  pessoa : Pessoa;

  titulo : string = "Alterar Dados de Pessoa";
  dtNascimento : string;
  constructor(
    private route: ActivatedRoute,
    private service: PessoaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(pessoa => {
      this.pessoa = pessoa;
      console.log(this.pessoa);
      this.dtNascimento = pessoa.dtNascimento.toString().substr(0, 10);
      console.log(this.dtNascimento);
    });

    
  }
  salvar(): void {
      this.pessoa.dtNascimento = new Date(this.dtNascimento) ;
      this.service.update(this.pessoa).subscribe(() =>{
        this.service.showMessage("Pessoa alterada com sucesso!");
        this.router.navigate(['/pessoa/list']);
      })
  }

}
