import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity('pagamento')
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
  status: number;
  @CreateDateColumn({type: "timestamp"})
  createdAt: Date;

  @UpdateDateColumn({type: "timestamp"})
  updatedAt: Date;
  
  @ManyToOne(() => Aluno, aluno => aluno.turma)

  // @OneToMany(() => Image, image => image.orphanage, {
  //   cascade: ['insert', 'update']
  // })
  
  @JoinColumn({ name: 'turma_id' })
  turma: Turma;

}