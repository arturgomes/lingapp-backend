import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

export default {
  

  async update(request: Request, response: Response) {
    const { status, id, } = request.params;
    console.log("id: ", id)

    const alunosRepository = getRepository(Aluno);
    await alunosRepository.update(id,{status:parseInt(status)})
    .then(
      r => {
        return r.status(201).json({message:"status alterado com sucesso"})
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