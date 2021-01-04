import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import turmasView from '../views/turmas_view';
import Turma from "../models/Turma";

export default {
  async index(request: Request, response: Response) {
    const turmasRepository = getRepository(Turma);
  
    const turmas = await turmasRepository.find({
      relations: ['alunos']
    });
  
    return response.json(turmasView.renderMany(turmas));
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
    } = request.body;

    const turmasRepository = getRepository(Turma);
    // const requestImages = request.files as Express.Multer.File[];

    const data = {
      nome,
      horario
    };

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      horario: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const turma = turmasRepository.create(data);
  
    await turmasRepository.save(turma);
  
    return response.status(201)
      .json(turmasView.render(turma));
  }
}