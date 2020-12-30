import Aluno from '../models/Aluno';

export default {
  render(image: Aluno) {
    return `http://localhost:3333/alunos/${image.path}`;
  },

  renderMany(alunos: Aluno[]) {
    return alunos.map(image => this.render(image));
  }
}