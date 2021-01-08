import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

export default {
  

  async update(request: Request, response: Response) {
    const { status, user_id, } = request.params;
    console.log("id: ", user_id)

    const alunosRepository = getRepository(Aluno);
    await alunosRepository.update(user_id,{status}).then(
      async aluno => {
    console.log(aluno)
    let tmp = aluno;
    tmp.status = parseInt(status);
    await alunosRepository.save(tmp);
      }
      );
    // // console.log(turmas.alunos.length)
    // if (turmas.alunos.length < turmas.lotacao) {
    //   const aluno = alunosRepository.create(data);
    //   console.log(aluno)
    //   await alunosRepository.save(aluno);
    //   return response.status(201)
    //     .json({message:1});
    // }
    // else {
    //   response.status(400).json({ message: 2 })
    // }
  }
}