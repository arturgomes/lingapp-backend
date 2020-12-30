import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Turma from './Turma';

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
  cursoTurma: string;

  @Column()
  cursoMaterial: string;

  @Column()
  cursoPagamento: string;
  @ManyToOne(() => Turma, turma => turma.alunos)

  // @OneToMany(() => Image, image => image.orphanage, {
  //   cascade: ['insert', 'update']
  // })
  @JoinColumn({ name: 'turma_id' })
  aluno: Image[];
}