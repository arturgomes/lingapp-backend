import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

import authConfig from '../../config/auth.js';

export default {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: Error.validation_failed });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const retail = await Retail.findOne({ where: { email } });

    if (!user && !retail) {
      return res.status(401).json({ error: Error.user_not_found });
    }

    if (user) {
      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: Error.password_not_match });
      }

      const { id, name } = user;
      // console.log('consumidor logado');

      return res.json({
        login: {
          id,
          name,
          email,
          tu: '897316929176464ebc9ad085f31e7284',
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }
    if (!(await retail.checkPassword(password))) {
      return res.status(401).json({ error: Error.password_not_match });
    }

    const { id, name } = retail;
    // console.log('retail logado');

    return res.json({
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


