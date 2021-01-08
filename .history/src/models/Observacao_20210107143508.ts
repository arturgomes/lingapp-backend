import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('observacoes')
export default class Observacao {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  tipo: string;

  @Column()
  desc: string;
  
  @CreateDateColumn({type: "timestamp"})
  createdAt: Date;

  @UpdateDateColumn({type: "timestamp"})
  updatedAt: Date;
  
  @ManyToOne(() => Aluno, aluno => aluno.observacoes, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;
  
}