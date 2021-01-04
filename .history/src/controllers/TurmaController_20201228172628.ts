import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import turmasView from '../views/turmas_view';
import Turma from "../models/Turma";

export default {
  async index(request: Request, response: Response) {
    const turmasRepository = getRepository(Turma);
  
    const turmas = await turmasRepository.find({
      relations: ['images']
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
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const turmasRepository = getRepository(Turma);
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return {
        path: image.filename,
      }
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ).required().min(1),
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