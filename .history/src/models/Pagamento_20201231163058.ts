import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('pagamento')
export default class Pagamento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'numeric' })
  valor: number;

  @Column()
  modo: string;

  @CreateDateColumn({type: "timestamp"})
  createdAt: Date;

  @UpdateDateColumn({type: "timestamp"})
  updatedAt: Date;
  
  @ManyToOne(() => Aluno, aluno => aluno.turma)

  
  @JoinColumn({ name: 'turma_id' })
  turma: Turma;

}