import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
import _ from 'lodash';

import turmasView from '../views/turmas_view';
import Turma from "../models/Turma";

export default {
  async index(request: Request, response: Response) {
    const turmasRepository = getRepository(Turma);
  
    const turmas = await turmasRepository.find({
      relations: ['alunos']
    });
    const ordTurmas = _.orderBy(turmas, t => t.alunos);
console.log(ordTurmas)
    return response.json(turmasView.renderMany(ordTurmas));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const turmasRepository = getRepository(Turma);

    const turma = await turmasRepository.findOneOrFail(id, {
      relations: ['alunos']
    });
  
    return response.json(turmasView.render(turma));
  },

  async create(request: Request, response: Response) {
    const {
      nome,
      horario,
      lotacao,
    } = request.body;

    const turmasRepository = getRepository(Turma);
    // const requestImages = request.files as Express.Multer.File[];

    const data = {
      nome,
      horario,
      lotacao
    };

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      horario: Yup.string().required(),
      lotacao: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const turma = turmasRepository.create(data);
    console.log(turma)
    await turmasRepository.save(turma);
  
    return response.status(201)
      .json(turmasView.render(turma));
  }
}