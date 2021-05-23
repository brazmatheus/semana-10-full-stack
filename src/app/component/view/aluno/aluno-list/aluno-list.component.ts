import { Aluno } from '../../../../model/aluno.model';
import { AlunoService } from '../../../../service/aluno.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  aluno: Aluno[] = [];
  displayedColumns: string[] = ['id', 'nmAluno', 'dtInicio', 'curso', 'acao'];
  constructor(private service: AlunoService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(aluno => {
      this.aluno = aluno;
      console.log(this.aluno);
    });

  }
  ngOnInit(): void {
    this.atualizarTabela();
  }

  excluir(aluno: Aluno): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data : {
        message: `Deseja realmente excluir a aluno ${aluno.pessoa.nmPessoa}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed : boolean) => {
      if(confirmed){
        this.service.delete(aluno).subscribe(() => {
          this.service.showMessage("Aluno excluída com sucesso");
          this.atualizarTabela();
        });
      }
    })

    

  }

}
