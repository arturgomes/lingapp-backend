import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

export default {
  async index(request: Request, response: Response) {
    const alunosRepository = getRepository(Aluno);

    const alunos = await alunosRepository.find({
      relations: ['turma']
    });

    return response.json(alunosView.renderMany(alunos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const alunosRepository = getRepository(Aluno);
    const aluno = await alunosRepository.findOneOrFail(id
      // , 
    //   {
    //   relations: ['turma']
    // }
    );
    return response.json(alunosView.render(aluno));
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
      turma,
      // cursoAluno,
      // cursoMaterial,
      // cursoPagamento, 
    } = request.body;

    const alunosRepository = getRepository(Aluno);
    const turmaRepository = getRepository(Turma);

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
      turma: Yup.number().required(),
      // cursoAluno: Yup.string().required(),
      // cursoMaterial: Yup.string().required(),
      // cursoPagamento: Yup.string().required(),
    });
    const data = {
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
      turma
      // cursoAluno,
      // cursoMaterial,
      // cursoPagamento, 
    }

    await schema.validate(data, {
      abortEarly: false,
    });
    //contar numero de alunos e ver se já lotou turma
    const turmas = await turmaRepository.findOneOrFail({id:turma},{
      relations: ['alunos']
    });
    console.log("turma "+turmas.nome+" : ",turmas.alunos.length)
    // console.log(turmas)

    const aluno = alunosRepository.create(data);

    await alunosRepository.save(aluno);

    return response.status(201)
      .json(alunosView.render(aluno));
  }
}