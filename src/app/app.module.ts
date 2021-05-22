import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/template/home/home.component';
import { DisciplinaListComponent } from './component/view/disciplina/disciplina-list/disciplina-list.component';
import { DisciplinaFormComponent } from './component/view/disciplina/disciplina-form/disciplina-form.component';
import { PessoaListComponent } from './component/view/pessoa/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './component/view/pessoa/pessoa-form/pessoa-form.component';
import { ProfessorListComponent } from './component/view/professor/professor-list/professor-list.component';
import { ProfessorFormComponent } from './component/view/professor/professor-form/professor-form.component';
import { OfertaListComponent } from './component/view/oferta/oferta-list/oferta-list.component';
import { OfertaFormComponent } from './component/view/oferta/oferta-form/oferta-form.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DisciplinaUpdateComponent } from './component/view/disciplina/disciplina-update/disciplina-update.component';
import { DeleteConfirmComponent } from './component/template/delete-confirm/delete-confirm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PessoaUpdateComponent } from './component/view/pessoa/pessoa-update/pessoa-update.component';
import { FormatDatePipe } from './util/pipe/format-date.pipe';
import {MatSelectModule} from '@angular/material/select';
import { ProfessorUpdateComponent } from './component/view/professor/professor-update/professor-update.component';
import { OfertaUpdateComponent } from './component/view/oferta/oferta-update/oferta-update.component';
import { AlunoFormComponent } from './component/view/aluno/aluno-form/aluno-form.component';
import { AlunoListComponent } from './component/view/aluno/aluno-list/aluno-list.component';
import { CursoFormComponent } from './component/view/curso/curso-form/curso-form.component';
import { CursoListComponent } from './component/view/curso/curso-list/curso-list.component';
import { CursoUpdateComponent } from './component/view/curso/curso-update/curso-update.component';
import { AlunoUpdateComponent } from './component/view/aluno/aluno-update/aluno-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DisciplinaListComponent,
    DisciplinaFormComponent,
    AlunoFormComponent,
    AlunoListComponent,
    PessoaListComponent,
    PessoaFormComponent,
    ProfessorListComponent,
    ProfessorFormComponent,
    OfertaListComponent,
    OfertaFormComponent,
    DisciplinaUpdateComponent,
    DeleteConfirmComponent,
    PessoaUpdateComponent,
    FormatDatePipe,
    ProfessorUpdateComponent,
    OfertaUpdateComponent,
    CursoFormComponent,
    CursoListComponent,
    CursoUpdateComponent,
    AlunoUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
