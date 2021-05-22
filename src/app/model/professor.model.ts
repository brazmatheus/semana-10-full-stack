import { Escolaridade } from './../enum/escolaridade.enum';
import { Pessoa } from './pessoa.model';
export interface Professor {
    idProfessor?: number;
    pessoa: Pessoa;
    escolaridade: Escolaridade;
     
}