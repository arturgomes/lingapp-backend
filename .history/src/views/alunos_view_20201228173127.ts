import Aluno from '../models/Aluno';

export default {
  render(aluno: Aluno) {
    return {
      alunoFirstName:  aluno.alunoFirstName,
alunoLastName:  aluno.alunoLastName,
alunoNascimento:  aluno.alunoNascimento,
alunoTelefone:  aluno.alunoTelefone,
alunoEmail:  aluno.alunoEmail,
responsavelAddress1:  aluno.responsavelAddress1,
responsavelAddress2:  aluno.responsavelAddress2,
responsavelBairro:  aluno.responsavelBairro,
responsavelCidade:  aluno.responsavelCidade,
responsavelCpf:  aluno.responsavelCpf,
responsavelEmail:  aluno.responsavelEmail,
responsavelEstado:  aluno.responsavelEstado,
responsavelNascimento:  aluno.responsavelNascimento,
responsavelNomeCompleto:  aluno.responsavelNomeCompleto,
responsavelTelefone:  aluno.responsavelTelefone,
responsavelCep:  aluno.responsavelCep,
cursoTurma:  aluno.cursoTurma,
cursoMaterial:  aluno.cursoMaterial,
cursoPagamento:  aluno.cursoPagamento,
    }
  },

  renderMany(alunos: Aluno[]) {
    return alunos.map(aluno => this.render(aluno));
  }
}