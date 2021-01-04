import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('turmas')
export default class Turma {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  material: string;

  @Column()
  pagamento: number;

  @Column()
  status: number;
  
  @OneToOne(() => Aluno, aluno => aluno.id)

  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;
  
}