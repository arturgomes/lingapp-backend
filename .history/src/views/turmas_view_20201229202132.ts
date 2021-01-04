import Turma from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(turma: Turma) {
    return {
      id: turma.id,
      nome: turma.nome,
      lotacao: turma.lotacao,
      vagas: turma.lotacao-turma.alunos.length,
      horario: turma.horario,
      alunos: alunosView.renderName(turma.alunos),
    }
  },

  renderMany(turmas: Turma[]) {
    return turmas.map(turma => this.render(turma));
  }
}