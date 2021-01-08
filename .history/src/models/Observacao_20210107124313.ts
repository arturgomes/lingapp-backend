import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('observacoes')
export default class Observacao {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  tipo: string;

  @Column()
  desc: string;

  @OneToOne(() => Aluno, aluno => aluno.observacoes, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;
  
}