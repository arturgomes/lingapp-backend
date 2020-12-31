
import Aluno from '../models/Aluno';
import Pagamento from '../models/Pagamento';
import alunos_view from '../views/alunos_view';

export default {
  render(pagamento: Aluno) {
    return {
      valor: pagamento.valor,
      modo: pagamento.modo,
      createdAt: pagamento.createdAt,
      aluno: pagamento.aluno,

    }
  },
  renderNm(pagamento: Aluno) {
    if (pagamento) {
      return {
        pagamentoName: pagamento.pagamentoFirstName + " " + pagamento.pagamentoLastName,
        turma: pagamento.turma
      }
    }
    else
      return null
  },
  renderName(pagamentos: Aluno[]) {
    if (pagamentos) {
      return pagamentos.map(pagamento => this.renderNm(pagamento));
    }
    else
      return null
  },
  renderMany(pagamentos: Aluno[]) {
    return pagamentos.map(pagamento => this.render(pagamento));
  }
}