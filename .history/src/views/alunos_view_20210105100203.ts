import Aluno from '../models/Aluno';

export default {
  render(aluno: Aluno) {
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
      material: aluno.material,
      pagamento: aluno.pagamento,
      status: aluno.status,
      turma: aluno.turma.id,

    }
  },
  renderNm(aluno: Aluno) {
    if (aluno) {
      return {
        alunoName: aluno.alunoFirstName + " " + aluno.alunoLastName,
        turma: aluno.turma
      }
    }
    else
      return null
  },
  
  renderShortList(aluno: Aluno) {
    if (aluno) {
      return {
        id: aluno.id,
        alunoTelefone:aluno.alunoTelefone,
        alunoName: aluno.alunoFirstName + " " + aluno.alunoLastName,
        turma: aluno.turma
      }
    }
    else
      return null
  },
  renderName(alunos: Aluno[]) {
    if (alunos) {
      return alunos.map(aluno => this.renderNm(aluno));
    }
    else
      return null
  },
  renderMany(alunos: Aluno[]) {
    return alunos.map(aluno => this.render(aluno));
  },
  renderList(alunos: Aluno[]) {
    return alunos.map(aluno => this.render(aluno));
  }
}