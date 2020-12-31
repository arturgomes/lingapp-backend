
import Aluno from '../models/Aluno';
import Pagamento from '../models/Pagamento';
import alunos_view from '../views/alunos_view';

export default {
  render(pagamento: Pagamento) {
    return {
      valor: pagamento.valor,
      modo: pagamento.modo,
      createdAt: pagamento.createdAt,
      aluno: pagamento.aluno,

    }
  },
  renderNm(pagamento: Pagamento) {
    if (pagamento) {
      return {
        pagamentoName: pagamento.pagamentoFirstName + " " + pagamento.pagamentoLastName,
        turma: pagamento.turma
      }
    }
    else
      return null
  },
  renderName(pagamentos: Pagamento[]) {
    if (pagamentos) {
      return pagamentos.map(pagamento => this.renderNm(pagamento));
    }
    else
      return null
  },
  renderMany(pagamentos: Pagamento[]) {
    return pagamentos.map(pagamento => this.render(pagamento));
  }
}