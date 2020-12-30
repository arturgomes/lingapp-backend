import Curso from "../models/Turma";
import alunosView from './alunos_view';

export default {
  render(curso: Curso) {
    return {
      id: curso.id,
      material: curso.material,
      pagamento: curso.pagamento,
      status: curso.status,
      aluno: alunosView.renderNm(curso.aluno),
    }
  },

  renderMany(cursos: Curso[]) {
    return cursos.map(curso => this.render(curso));
  }
}