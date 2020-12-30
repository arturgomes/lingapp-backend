import Turma from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(turma: Turma) {
    return {
      nome: turma.id,
      horario: turma.name,
      alunos: imagesView.renderMany(turma.alunos),
    }
  },

  renderMany(turmas: Turma[]) {
    return turmas.map(turma => this.render(turma));
  }
}