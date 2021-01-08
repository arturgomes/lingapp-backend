import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('observacoes')
export default class Observacao {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  tipo: string;

  @Column()
  horario: string;

  @OneToOne(() => Aluno, aluno => aluno.observacoes, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'observacao' })
  aluno: Aluno;
  
}