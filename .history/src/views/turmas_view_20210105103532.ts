import Turma from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(turma: Turma) {
    let vg;
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
      alunos: alunosView.renderShortList(turma.alunos),
    }
  },

  renderMany(turmas: Turma[]) {
    if( turmas){
      return turmas.map(turma => this.render(turma));}
    else
      return null;
  }
}