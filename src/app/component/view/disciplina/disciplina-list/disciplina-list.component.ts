import { Disciplina } from './../../../../model/disciplina.model';
import { DisciplinaService } from './../../../../service/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.css']
})
export class DisciplinaListComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  displayedColumns: string[] = ['id', 'nmDisciplina', 'cargaHoraria', 'acao'];
  constructor(private service: DisciplinaService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
      console.log(this.disciplinas);
    });

  }
  ngOnInit(): void {
    this.atualizarTabela();
  }

  excluir(disciplina: Disciplina): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data : {
        message: `Deseja realmente excluir a disciplina ${disciplina.nmDisciplina}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirmed : boolean) => {
      if(confirmed){
        this.service.delete(disciplina).subscribe(() => {
          this.service.showMessage("Disciplina excluída com sucesso");
          this.atualizarTabela();
        });
      }
    })

    

  }

}
