import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BaseEntity } from "typeorm";
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

  @Column()
  ativo: boolean;

  @OneToMany(() => Aluno, aluno => aluno.turma, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'aluno_id' })
  alunos: Aluno[];
  
}