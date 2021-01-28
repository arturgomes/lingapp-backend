import { Request, Response } from "express";
import { getRepository ,getConnection} from "typeorm";
import * as Yup from 'yup';

import alunosView from '../views/alunos_view';
import Aluno from "../models/Aluno";
import Turma from "../models/Turma";

export default {
  

  async update(request: Request, response: Response) {
    const { classe, id } = request.params;
    console.log(id, classe)

    const alunosRepository = getRepository(Aluno);
    const turmaRepository = getRepository(Turma);
    let aluno = await alunosRepository.findOne({where:{id}
      , relations: ['turma']
     })
    // const aluno = alunosRepository.create(data);
    const turma = await turmaRepository.findOne({where:{id:classe}})
    console.log(turma)
    if(turma){
      await alunosRepository.save({...aluno, turma}).then(response => console.log(response))
      return response.status(201).json({message:`Aluno alterado para a turma ${turma.horario}`})
    }
    else {
      response.status(400).json({ message: 2 })
    }
  }
}