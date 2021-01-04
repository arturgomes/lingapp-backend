import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Aluno from './Aluno';

@Entity('turmas')
export default class Turma {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

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

  @OneToMany(() => Aluno, aluno => aluno.turma, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'aluno_id' })
  alunos: Aluno[];
}