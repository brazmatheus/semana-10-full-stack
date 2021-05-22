import { Dia } from './../../../../enum/dia.enum';
import { DeleteConfirmComponent } from 'src/app/component/template/delete-confirm/delete-confirm.component';
import { OfertaService } from './../../../../service/oferta.service';
import { Oferta } from './../../../../model/oferta.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  ofertas: Oferta[] = [];
  displayedColumns: string[] = ['id', 'disciplina', 'professor', 'dia', 'inicio', 'fim', 'acao']; 
  constructor(private service: OfertaService, public dialog: MatDialog) { }

  atualizarTabela(): void {
    this.service.findAll().subscribe(ofertas => {
      this.ofertas = ofertas;
    });

  }

  getDia<String>(dia: Dia): String {
    return Dia[dia];
  }

  ngOnInit(): void {
    this.atualizarTabela();
  }

  excluir(oferta: Oferta): void {

    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data : {
        message: `Deseja realmente excluir a oferta da disciplina ${oferta.disciplina.nmDisciplina} com o professor ${oferta.professor.pessoa.nmPessoa}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed : boolean) => {
      if(confirmed){
        this.service.delete(oferta).subscribe(() => {
          this.service.showMessage("Oferta excluída com sucesso");
          this.atualizarTabela();
        });
      }
    });

  }
}
