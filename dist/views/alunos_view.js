"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(aluno) {
        return {
            alunoFirstName: aluno.alunoFirstName,
            alunoLastName: aluno.alunoLastName,
            alunoNascimento: aluno.alunoNascimento,
            alunoTelefone: aluno.alunoTelefone,
            alunoEmail: aluno.alunoEmail,
            responsavelAddress1: aluno.responsavelAddress1,
            responsavelAddress2: aluno.responsavelAddress2,
            responsavelBairro: aluno.responsavelBairro,
            responsavelCidade: aluno.responsavelCidade,
            responsavelCpf: aluno.responsavelCpf,
            responsavelEmail: aluno.responsavelEmail,
            responsavelEstado: aluno.responsavelEstado,
            responsavelNascimento: aluno.responsavelNascimento,
            responsavelNomeCompleto: aluno.responsavelNomeCompleto,
            responsavelTelefone: aluno.responsavelTelefone,
            responsavelCep: aluno.responsavelCep,
            turma: aluno.turma
        };
    },
    renderNm(aluno) {
        return {
            alunoName: aluno.alunoFirstName + " " + aluno.alunoLastName,
            turma: aluno.turma
        };
    },
    renderName(alunos) {
        return alunos.map(aluno => this.renderNm(aluno));
    },
    renderMany(alunos) {
        return alunos.map(aluno => this.render(aluno));
    }
};
//# sourceMappingURL=alunos_view.js.map