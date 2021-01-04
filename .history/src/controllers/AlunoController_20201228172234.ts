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
      relations: ['images']
    });

    return response.json(turmasView.render(turma));
  },

  async create(request: Request, response: Response) {
    const {
      alunoFirstName,
      alunoLastName,
      alunoNascimento,
      alunoTelefone,
      alunoEmail,
      responsavelAddress1,
      responsavelAddress2,
      responsavelBairro,
      responsavelCidade,
      responsavelCpf,
      responsavelEmail,
      responsavelEstado,
      responsavelNascimento,
      responsavelNomeCompleto,
      responsavelTelefone,
      responsavelCep,
      cursoTurma,
      cursoMaterial,
      cursoPagamento, alunoFirstName,
      alunoLastName,
      alunoNascimento,
      alunoTelefone,
      alunoEmail,
      responsavelAddress1,
      responsavelAddress2,
      responsavelBairro,
      responsavelCidade,
      responsavelCpf,
      responsavelEmail,
      responsavelEstado,
      responsavelNascimento,
      responsavelNomeCompleto,
      responsavelTelefone,
      responsavelCep,
      cursoTurma,
      cursoMaterial,
      cursoPagamento,
    };

    const schema = Yup.object().shape({
      alunoFirstName: Yup.string().required(),
      alunoLastName: Yup.string().required(),
      alunoNascimento: Yup.string().required(),
      alunoTelefone: Yup.string().required(),
      alunoEmail: Yup.string().required(),
      responsavelAddress1: Yup.string().required(),
      responsavelAddress2: Yup.string().required(),
      responsavelBairro: Yup.string().required(),
      responsavelCidade: Yup.string().required(),
      responsavelCpf: Yup.string().required(),
      responsavelEmail: Yup.string().required(),
      responsavelEstado: Yup.string().required(),
      responsavelNascimento: Yup.string().required(),
      responsavelNomeCompleto: Yup.string().required(),
      responsavelTelefone: Yup.string().required(),
      responsavelCep: Yup.string().required(),
      cursoTurma: Yup.string().required(),
      cursoMaterial: Yup.string().required(),
      cursoPagamento: Yup.string().required(),
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