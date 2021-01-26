import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('turmas')
export default class Turma extends BaseEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  lotacao: number;

  @Column()
  horario: string;

  @OneToMany(() => Aluno, aluno => aluno.turma, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'aluno_id' })
  alunos: Aluno[];
  
}