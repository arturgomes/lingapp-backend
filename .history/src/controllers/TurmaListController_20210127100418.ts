import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';
import _ from 'lodash';

import turmasView from '../views/turmas_view';
import Turma from "../models/Turma";

export default {
  
  async index(request: Request, response: Response) {
    const turmasRepository = getRepository(Turma);
  
    const turmas = await turmasRepository.find({where: {ativo:true},
      order: {
        nome: "ASC",
        ativo: "DESC"
    }
    })
    console.log(turmas)
    return response.json(turmasView.renderManyList(turmas));
  },
}