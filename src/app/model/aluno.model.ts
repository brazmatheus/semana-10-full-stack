import { Curso } from "./curso.model";
import { Pessoa } from "./pessoa.model";

export interface Aluno {
    idAluno?: number;
    dtInicio: Date;
    ativo: boolean;
    pessoa: Pessoa;
    curso: Curso;
}