import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import observacoesView from '../views/observacoes_view';
import Observacao from "../models/Observacao";
import Aluno from "../models/Aluno";

export default {
  async index(request: Request, response: Response) {
    const observacoesRepository = getRepository(Observacao);

    const obs = await observacoesRepository.find({
      relations: ['turma']
    });
    console.log(obs)
    return response.json(observacoesView.renderMany(obs));
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
      tipo,
      desc,
    } = request.body;
    const {id} = req.params;
    console.log("turma: ",      desc    )

    const observacoesRepository = getRepository(Observacao);
    const alunoRepository = getRepository(aluno);

    const schema = Yup.object().shape({
      tipo: Yup.string().required(),
      desc: Yup.string().required(),
    });
    const data = {
      tipo,
      desc,
      createdAt:new Date() 
    }
    // console.log(data)

    await schema.validate(data, {
      abortEarly: false,
    });
    //contar numero de alunos e ver se já lotou turma
    const turmas = await alunoRepository.findOneOrFail({ id: turma }, {
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