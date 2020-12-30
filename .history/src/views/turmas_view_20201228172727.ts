import Turma from "../models/Turma";
import imagesView from './images_view';

export default {
  render(turma: Turma) {
    return {
      id: turma.id,
      name: turma.name,
      latitude: turma.latitude,
      longitude: turma.longitude,
      about: turma.about,
      instructions: turma.instructions,
      opening_hours: turma.opening_hours,
      open_on_weekends: turma.open_on_weekends,
      images: imagesView.renderMany(turma.images),
    }
  },

  renderMany(turmas: Turma[]) {
    return turmas.map(turma => this.render(turma));
  }
}