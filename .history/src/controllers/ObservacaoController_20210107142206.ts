import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import observacoesView from '../views/observacoes_view';
import Observacao from "../models/Observacao";

export default {
  async index(request: Request, response: Response) {
    const observacoesRepository = getRepository(Observacao);

    const obs = await observacoesRepository.find({
      relations: ['turma']
    });
    console.log(obs)
    return response.json(observacoesView.renderShortList(obs));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id)
    const observacoesRepository = getRepository(Observacao);
    // const aluno = await observacoesRepository.find({where:{id}})
    const obs = await observacoesRepository.findOneOrFail(id);
    console.log(obs)
    return response.json(observacoesView.render(obs));
  },

  async create(request: Request, response: Response) {
    const {
      alunoFirstName,
      alunoLastName,
      alunoNascimento,
      alunoInsta,
      alunoCamiseta,
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
      cursoStatus,
      turma,
      // cursoObservacao,
      // cursoMaterial,
      // cursoPagamento, 
    } = request.body;
    console.log("turma: ",      turma    )

    const observacoesRepository = getRepository(Observacao);
    const turmaRepository = getRepository(Turma);

    const schema = Yup.object().shape({
      alunoFirstName: Yup.string().required(),
      alunoLastName: Yup.string().required(),
      alunoInsta: Yup.string().required(),
      alunoCamiseta: Yup.string().required(),
      alunoNascimento: Yup.string().required(),
      alunoTelefone: Yup.string().required(),
      alunoEmail: Yup.string().required(),
      responsavelAddress1: Yup.string().required(),
      // responsavelAddress2: Yup.string().required(),
      responsavelBairro: Yup.string().required(),
      responsavelCidade: Yup.string().required(),
      responsavelCpf: Yup.string().required(),
      responsavelEmail: Yup.string().required(),
      responsavelEstado: Yup.string().required(),
      responsavelNascimento: Yup.string().required(),
      responsavelNomeCompleto: Yup.string().required(),
      responsavelTelefone: Yup.string().required(),
      responsavelCep: Yup.string().required(),
      // cursoTurma: Yup.string().required(),
      turma: Yup.number().required(),
      // cursoMaterial: Yup.string().required(),
      // cursoPagamento: Yup.string().required(),
    });
    const data = {
      alunoFirstName,
      alunoLastName,
      alunoInsta,
      alunoCamiseta,
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
      material: cursoMaterial,
      pagamento: cursoPagamento,
      status: cursoStatus,
      turma
      // cursoObservacao,
      // cursoMaterial,
      // cursoPagamento, 
    }
    // console.log(data)

    await schema.validate(data, {
      abortEarly: false,
    });
    //contar numero de alunos e ver se já lotou turma
    const turmas = await turmaRepository.findOneOrFail({ id: turma }, {
      relations: ['alunos']
    });
    // console.log(turmas.alunos.length)
    if (turmas.alunos.length < turmas.lotacao) {
      const aluno = observacoesRepository.create(data);
      console.log(aluno)
      await observacoesRepository.save(aluno);
      return response.status(201)
        .json({message:1});
    }
    else {
      response.status(400).json({ message: 2 })
    }
  }
}