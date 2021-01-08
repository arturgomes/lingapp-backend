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

  @OneToOne(() => Aluno, aluno => aluno.observacao_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'observacao_id' })
  aluno: Aluno;
  
}