import { PessoaService } from './../../../../service/pessoa.service';
import { Pessoa } from './../../../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  titulo : string = "Cadastrar nova Pessoa";
  dtNascimento : string;
  pessoa: Pessoa = {
    nmPessoa: "",
    cpf: null,
    dtNascimento: null
  }

  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.pessoa.dtNascimento = new Date(this.dtNascimento) ;
    this.service.create(this.pessoa).subscribe(() =>{
      this.service.showMessage("Pessoa cadastrada com sucesso.")
      this.router.navigate(['/pessoa/list']);
    });
  }

}
