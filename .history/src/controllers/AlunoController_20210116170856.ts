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
    const aluno = await alunosRepository.findOneOrFail(
      {
        select: ['turma_id'],
        relations: ["turma"],
        where: {
            firstName: "Timber",
            lastName: "Saw"
        },
        order: {
            name: "ASC",
            id: "DESC"
        },
        skip: 5,
        take: 10,
        cache: true
    }
      // id,{ relations: ['turma'], select:['turma_id'] }
      );
    
    const turmasRepository = getRepository(Turma);
  console.log(aluno)
    // const turmas = await turmasRepository.find({
    //   relations: ['alunos']
    // });
    return response.json(aluno);
    // return response.json(alunosView.render(aluno));
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
    console.log("turma: ",      turma    )

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
      vencimento,
      obs,
      material: cursoMaterial,
      pagamento: cursoPagamento,
      status: cursoStatus,
      turma
      // cursoAluno,
      // cursoMaterial,
      // cursoPagamento, 
    }
    // console.log(data)

    // await schema.validate(data, {
    //   abortEarly: false,
    // });
    //contar numero de alunos e ver se já lotou turma
    const turmas = await turmaRepository.findOneOrFail({ id: turma }, {
      relations: ['alunos']
    });
    // console.log(turmas.alunos.length)
    // if (turmas.alunos.length < turmas.lotacao) {
      const aluno = alunosRepository.create(data);
      console.log(aluno)
      await alunosRepository.save(aluno);
      return response.status(201)
        .json({message:1});
    // }
    // else {
    //   response.status(400).json({ message: 2 })
    // }
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
      vencimento,
      obs,
    } = request.body;
    console.log("turma: ",      turma    )

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
      material: cursoMaterial,
      pagamento: cursoPagamento,
      status: cursoStatus,
      turma:cursoTurma
    }
    console.log(data)
    const aluno = await alunosRepository.findOne({where: {alunoEmail}})
    await alunosRepository.save({...aluno,...data});
    // const aluno = alunosRepository.update()
      const aluno1 = alunosRepository.create(data);
      console.log(aluno)
      // await alunosRepository.save(aluno);
      return response.status(201)
        .json({message:1});
   
  }
}