
import Aluno from '../models/Aluno';
import Pagamento from '../models/Pagamento';
import alunosView from '../views/alunos_view';

export default {
  render(pagamento: Pagamento) {
    return {
      valor: pagamento.valor,
      modo: pagamento.modo,
      createdAt: pagamento.createdAt,
      aluno: alunosView,

    }
  },
  renderMany(pagamentos: Pagamento[]) {
    return pagamentos.map(pagamento => this.render(pagamento));
  }
}