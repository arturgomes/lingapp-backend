import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import Turma from './Turma';
import Observacao from './Observacao';

@Entity('alunos')
export default class Aluno {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  alunoFirstName: string;

  @Column()
  alunoLastName: string;

  @Column()
  alunoNascimento: string;

  @Column()
  alunoTelefone: string;

  @Column()
  alunoEmail: string;

  @Column()
  responsavelAddress1: string;

  @Column()
  responsavelAddress2: string;

  @Column()
  responsavelBairro: string;

  @Column()
  responsavelCidade: string;

  @Column()
  responsavelCpf: string;

  @Column()
  responsavelEmail: string;

  @Column()
  responsavelEstado: string;

  @Column()
  responsavelNascimento: string;

  @Column()
  responsavelNomeCompleto: string;

  @Column()
  responsavelTelefone: string;

  @Column()
  responsavelCep: string;

  @Column()
  material: string;

  @Column()
  pagamento: number;

  @Column()
  obs: string;
  
  @Column()
  vencimento: string;
  
  @Column()
  status: number;
  
  @Column()
  alunoInsta: string;

  @Column()
  alunoCamiseta: string;

  @ManyToOne(() => Aluno, aluno => aluno.turma)

  
  @JoinColumn({ name: 'turma_id', referencedColumnName: 'id' })
  turma: Turma;

  @OneToMany(() => Observacao, observacao => observacao.aluno, {
    cascade: ['insert', 'update']
  })

  @JoinColumn({ name: 'observacao_id' })
  observacoes: Observacao[];
}