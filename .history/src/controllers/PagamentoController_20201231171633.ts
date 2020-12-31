import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import pagamentosView from '../views/pagamentos_view';
import Pagamento from "../models/Turma";

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

    const pagamentosRepository = getRepository(Pagamento);
    const turmaRepository = getRepository(Turma);

    const schema = Yup.object().shape({
      pagamentoFirstName: Yup.string().required(),
      pagamentoLastName: Yup.string().required(),
      pagamentoNascimento: Yup.string().required(),
      pagamentoTelefone: Yup.string().required(),
      pagamentoEmail: Yup.string().required(),
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
      // cursoPagamento: Yup.string().required(),
      // cursoMaterial: Yup.string().required(),
      // cursoPagamento: Yup.string().required(),
    });
    const data = {
      pagamentoFirstName,
      pagamentoLastName,
      pagamentoNascimento,
      pagamentoTelefone,
      pagamentoEmail,
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
      // cursoPagamento,
      // cursoMaterial,
      // cursoPagamento, 
    }

    await schema.validate(data, {
      abortEarly: false,
    });
    //contar numero de pagamentos e ver se já lotou turma
    const turmas = await turmaRepository.findOneOrFail({ id: turma }, {
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