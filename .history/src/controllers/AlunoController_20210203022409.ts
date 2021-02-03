import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

export default {
  async index(request: Request, response: Response) {
    const alunosRepository = getRepository(Aluno);
    const alunos = await alunosRepository.find({ relations: ['turma'] });
    // console.log(alunos)
    return response.json(alunosView.renderShortList(alunos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    // console.log(id)
    const alunosRepository = getRepository(Aluno);
    // const aluno = await alunosRepository.find({where:{id}})
    const aluno = await alunosRepository.find({where:{id}, relations: ['turma'] });

    // console.log(aluno)
    return response.json(alunosView.render(aluno[0]));
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
      vencimento,
      obs,
      // cursoAluno,
      // cursoMaterial,
      // cursoPagamento, 
    } = request.body;
    // console.log("turma: ",      turma    )

    const alunosRepository = getRepository(Aluno);
    const turmaRepository = getRepository(Turma);

    const schema = Yup.object().shape({
      alunoFirstName: Yup.string().required(),
      alunoLastName: Yup.string().required(),
      // alunoInsta: Yup.string().required(),
      // alunoCamiseta: Yup.string().required(),
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
      turma: Yup.number().required(),
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
      vencimento,
      obs,
      material: cursoMaterial,
      pagamento: cursoPagamento,
      status: cursoStatus,
      turma
    }
    const aluno = await alunosRepository.create(data);
    // console.log(aluno)
    const result = await alunosRepository.save(aluno);
    return response.status(201).json({message:result});
  },
  async update(request: Request, response: Response) {
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
      online,
      vencimento,
      obs,
    } = request.body;
    // console.log("turma: ",      turma    )

    const alunosRepository = getRepository(Aluno);
    const turmaRepository = getRepository(Turma);

 
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
      vencimento,
      obs,
      online,
      material: cursoMaterial,
      pagamento: cursoPagamento,
      status: cursoStatus,
      turma:cursoTurma
    }
    console.log(data.online)
    const aluno = await alunosRepository.findOne({where: {alunoEmail}})
    await alunosRepository.save({...aluno,...data});
    // const aluno = alunosRepository.update()
      // const aluno1 = alunosRepository.create(data);
      // console.log(aluno)
      // await alunosRepository.save(aluno);
      return response.status(201)
        .json({message:1});
   
  }
}