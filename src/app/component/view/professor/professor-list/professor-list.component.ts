import { Escolaridade } from './../../../../enum/escolaridade.enum';
import { ProfessorService } from './../../../../service/professor.service';
import { Professor } from './../../../../model/professor.model';
import { Pessoa } from './../../../../model/pessoa.model';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professores: Professor[] = [];
  displayedColumns: string[] = ['id', 'pessoa', 'escolaridade', 'acao'];
  constructor(private service: ProfessorService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(professores => {
      this.professores = professores;
    });

  }
  ngOnInit(): void {
    this.atualizarTabela();
  }

  getEscolaridade<String>(escolaridade: Escolaridade): String {
    return Escolaridade[escolaridade];
  }

  excluir(professor: Professor): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        message: `Deseja realmente excluir o(a) professor(a) ${professor.pessoa.nmPessoa}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.service.delete(professor).subscribe(() => {
          this.service.showMessage("Professor(a) excluído(a) com sucesso");
          this.atualizarTabela();
        });
      }
    })
  }

}
