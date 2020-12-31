import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import pagamentosView from '../views/pagamentos_view';
import Pagamento from "../models/Turma";
import Aluno from "../models/Aluno";

export default {
  async index(request: Request, response: Response) {
    const pagamentosRepository = getRepository(Pagamento);
    const pagamentos = await pagamentosRepository.find({
      relations: ['turma']
    });
    return response.json(pagamentosView.renderMany(pagamentos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const pagamentosRepository = getRepository(Pagamento);
    const pagamento = await pagamentosRepository.findOneOrFail(id
      // , 
      //   {
      //   relations: ['turma']
      // }
    );
    return response.json(pagamentosView.render(pagamento));
  },

  async create(request: Request, response: Response) {
    const { modo,valor } = request.body;
    const { aluno_id } = request.params;

    const pagamentosRepository = getRepository(Pagamento);
    const alunoRepository = getRepository(Aluno);

    const schema = Yup.object().shape({
      
      modo: Yup.string().required(),
      valor: Yup.number().required(),
      // cursoPagamento: Yup.string().required(),
      // cursoMaterial: Yup.string().required(),
      // cursoPagamento: Yup.string().required(),
    });
    const data = {
      modo, valor, aluno:aluno_id
      // cursoPagamento,
      // cursoMaterial,
      // cursoPagamento, 
    }

    await schema.validate(data, {
      abortEarly: false,
    });
    //contar numero de pagamentos e ver se já lotou turma
    const turmas = await alunoRepository.findOneOrFail({ id: aluno_id }, {
      relations: ['pagamentos']
    });
    console.log(turmas.pagamentos.length)
    if (turmas.pagamentos.length < turmas.lotacao) {
      const pagamento = pagamentosRepository.create(data);
      await pagamentosRepository.save(pagamento);
      return response.status(201)
        .json(pagamentosView.render(pagamento));
    }
    else {
      response.status(400).json({ message: "turma lotada" })
    }
  }
}