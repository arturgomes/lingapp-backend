import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import cursosView from '../views/cursos_view';
import Curso from "../models/Curso";

export default {
  async index(request: Request, response: Response) {
    const cursosRepository = getRepository(Curso);
  
    const cursos = await cursosRepository.find({
      relations: ['alunos']
    });
    return response.json(cursosView.renderMany(cursos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const cursosRepository = getRepository(Curso);

    const curso = await cursosRepository.findOneOrFail(id, {
      relations: ['alunos']
    });
  
    return response.json(cursosView.render(curso));
  },

  async create(request: Request, response: Response) {
    const {
      material,
      pagamento,
      status,
      aluno
    } = request.body;

    const cursosRepository = getRepository(Curso);
    // const requestImages = request.files as Express.Multer.File[];

    const data = {
      material,
      pagamento,
      status,
      aluno
    };

    const schema = Yup.object().shape({
      material: Yup.string().required(),
      pagamento: Yup.string().required(),
      status: Yup.number().required(),
      aluno: Yup.number().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const curso = cursosRepository.create(data);
  
    await cursosRepository.save(curso);
  
    return response.status(201)
      .json(cursosView.render(curso));
  }
}