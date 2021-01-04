import Turma from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(turma: Turma) {
    if(!turma.alunos){
      vg = turma.lotacao;
    }
    else{
      vg = turma.alunos.length
    }
    return {
      id: turma.id,
      nome: turma.nome,
      lotacao: turma.lotacao,
      vagas: turma.lotacao - vg,
      horario: turma.horario,
      alunos: alunosView.renderName(turma.alunos),
    }
  },

  renderMany(turmas: Turma[]) {
    return turmas.map(turma => this.render(turma));
  }
}