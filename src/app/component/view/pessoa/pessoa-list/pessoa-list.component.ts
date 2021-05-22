import { PessoaService } from './../../../../service/pessoa.service';
import { Pessoa } from './../../../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  pessoas: Pessoa[] = [];
  displayedColumns: string[] = ['id', 'nmPessoa', 'cpf', 'dtNascimento', 'acao'];
  constructor(private service: PessoaService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(pessoas => {
      console.log(pessoas);
      this.pessoas = pessoas;
    });
  }

  ngOnInit(): void {
    this.atualizarTabela();
  }
  excluir(pessoa: Pessoa): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data : {
        message: `Deseja realmente excluir  ${pessoa.nmPessoa}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed : boolean) => {
      if(confirmed){
        this.service.delete(pessoa).subscribe(() => {
          this.service.showMessage("Pessoa excluída com sucesso");
          this.atualizarTabela();
        });
      }
    });
  }
}
