import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

import authConfig from '../config/auth';
import Error from '../config/errors';

export default {
  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: Error.validation_failed });
    }

    const { email, password } = request.body;
    const alunosRepository = getRepository(Aluno);
    const aluno = await alunosRepository.find({where:{
      alunoEmail:email,
      responsavelCpf:password
    }, 
    relations: ['turma'] });
   

    if (!aluno) {
      return response.status(401).json({ error: Error.user_not_found });
    }

    if (aluno) {
      const { id, alunoFirstName } = aluno;
      return response.json({
        login: {
          id,
          name:alunoFirstName,
          email,
          tu: '897316929176464ebc9ad085f31e7284',
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }
    if (!(await retail.checkPassword(password))) {
      return response.status(401).json({ error: Error.password_not_match });
    }

    const { id, name } = retail;
    // console.log('retail logado');

    return response.json({
      login: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}


