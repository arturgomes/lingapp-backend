import Observacao from "../models/Observacao";
import alunosView from './alunos_view';

export default {
  render(observacao: Observacao) {
    return null;
    // let vg;
    // if(!observacao.alunos){
    //   vg = observacao.lotacao;
    // }
    // else{
    //   vg = observacao.alunos.length
    // }
    // return {
    //   id: observacao.id,
    //   nome: observacao.nome,
    //   lotacao: observacao.lotacao,
    //   vagas: observacao.lotacao - vg,
    //   horario: observacao.horario,
    //   alunos: alunosView.renderShortList(observacao.alunos),
    // }
  },

  renderMany(observacaos: Observacao[]) {
    // if( observacaos){
    //   return observacaos.map(observacao => this.render(observacao));}
    // else
      return null;
  }
}