import Turma from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(turma: Turma) {
    return {
      id: turma.id,
      nome: turma.nome,
      horario: turma.horario,
      // alunos: alunosView.renderMany(turma.alunos),
    }
  },

  renderMany(turmas: Turma[]) {
    return turmas.map(turma => this.render(turma));
  }
}