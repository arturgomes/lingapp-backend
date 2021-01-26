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
    const turma = turmaRepository.findOne(classe)
    // const turmaRepository = getRepository(Turma);
    // await getConnection()
    // .createQueryBuilder()
    // .update(Aluno)
    // .set({ 
    //     turma: turma
    // })
    // .where("id = :id", { id: id })
    // .execute()
    // await alunosRepository.update(id, {turma:turma})
    alunosRepository.findOne(({
      join: { alias: 'turmas', leftJoin: { aluno: 'alunos.turma' } },
      where: { id },
    })).then(r => console.log(r));
    
    // aluno.turma_id = turma
    // .then(
    //   r => {
        return response.status(201).json({message:"status alterado com sucesso"})
    //   }
    //   );
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