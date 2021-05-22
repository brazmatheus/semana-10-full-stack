import { Dia } from './../enum/dia.enum';
import { Professor } from './professor.model';
import { Escolaridade } from '../enum/escolaridade.enum';
import { Disciplina } from './disciplina.model';
export interface Oferta {
    idOferta?: number;
    professor: Professor;
    disciplina: Disciplina;
    dtInicio: Date;
    dtFim: Date;
    dia: Dia;     
}