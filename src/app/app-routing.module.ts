import { OfertaUpdateComponent } from './component/view/oferta/oferta-update/oferta-update.component';
import { ProfessorUpdateComponent } from './component/view/professor/professor-update/professor-update.component';
import { PessoaUpdateComponent } from './component/view/pessoa/pessoa-update/pessoa-update.component';
import { DisciplinaUpdateComponent } from './component/view/disciplina/disciplina-update/disciplina-update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/template/home/home.component';
import { PessoaListComponent } from './component/view/pessoa/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './component/view/pessoa/pessoa-form/pessoa-form.component';
import { ProfessorListComponent } from './component/view/professor/professor-list/professor-list.component';
import { ProfessorFormComponent } from './component/view/professor/professor-form/professor-form.component';
import { DisciplinaListComponent } from './component/view/disciplina/disciplina-list/disciplina-list.component';
import { DisciplinaFormComponent } from './component/view/disciplina/disciplina-form/disciplina-form.component';
import { OfertaListComponent } from './component/view/oferta/oferta-list/oferta-list.component';
import { OfertaFormComponent } from './component/view/oferta/oferta-form/oferta-form.component';
import { AlunoListComponent } from './component/view/aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './component/view/aluno/aluno-form/aluno-form.component';
import { CursoListComponent } from './component/view/curso/curso-list/curso-list.component';
import { CursoFormComponent } from './component/view/curso/curso-form/curso-form.component';
import { AlunoUpdateComponent } from './component/view/aluno/aluno-update/aluno-update.component';
import { CursoUpdateComponent } from './component/view/curso/curso-update/curso-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa/list', component: PessoaListComponent },
  { path: 'pessoa/form', component: PessoaFormComponent },
  { path: 'pessoa/form/:id', component: PessoaUpdateComponent },
  { path: 'professor/list', component: ProfessorListComponent },
  { path: 'professor/form', component: ProfessorFormComponent },
  { path: 'professor/form/:id', component: ProfessorUpdateComponent },
  { path: 'disciplina/list', component: DisciplinaListComponent },
  { path: 'disciplina/form', component: DisciplinaFormComponent },
  { path: 'disciplina/form/:id', component: DisciplinaUpdateComponent },
  { path: 'oferta/list', component: OfertaListComponent },
  { path: 'oferta/form', component: OfertaFormComponent },
  { path: 'oferta/form/:id', component: OfertaUpdateComponent },
  { path: 'aluno/list', component: AlunoListComponent },
  { path: 'aluno/form', component: AlunoFormComponent },
  { path: 'aluno/form/:id', component: AlunoUpdateComponent },
  { path: 'curso/list', component: CursoListComponent },
  { path: 'curso/form', component: CursoFormComponent },
  { path: 'curso/form/:id', component: CursoUpdateComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
