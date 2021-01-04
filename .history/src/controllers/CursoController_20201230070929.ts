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
      nome,
      horario,
      lotacao,
    } = request.body;

    const cursosRepository = getRepository(Curso);
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

    const curso = cursosRepository.create(data);
  
    await cursosRepository.save(curso);
  
    return response.status(201)
      .json(cursosView.render(curso));
  }
}