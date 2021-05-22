import { Escolaridade } from '../../../../enum/escolaridade.enum';
import { CursoService } from '../../../../service/curso.service';
import { Curso } from '../../../../model/curso.model';
import { Pessoa } from '../../../../model/pessoa.model';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  curso: Curso[] = [];
  displayedColumns: string[] = ['id', 'nome'];
  constructor(private service: CursoService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(curso => {
      this.curso = curso;
    });

  }
  ngOnInit(): void {
    this.atualizarTabela();
  }

  getEscolaridade<String>(escolaridade: Escolaridade): String {
    return Escolaridade[escolaridade];
  }

  excluir(curso: Curso): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        message: `Deseja realmente excluir o(a) curso(a) ${curso.nmCurso}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.service.delete(curso).subscribe(() => {
          this.service.showMessage("Curso(a) excluído(a) com sucesso");
          this.atualizarTabela();
        });
      }
    })
  }

}
