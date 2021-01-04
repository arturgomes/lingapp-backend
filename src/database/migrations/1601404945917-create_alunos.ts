import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class createImages1601404945917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'alunos',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'alunoFirstName',
          type: 'varchar'
        },
        {
          name: 'alunoLastName',
          type: 'varchar'
        },
        {
          name: 'alunoNascimento',
          type: 'varchar'
        },
        {
          name: 'alunoTelefone',
          type: 'varchar'
        },
        {
          name: 'alunoEmail',
          type: 'varchar'
        },
        {
          name: 'responsavelAddress1',
          type: 'varchar'
        },
        {
          name: 'responsavelAddress2',
          type: 'varchar'
        },
        {
          name: 'responsavelBairro',
          type: 'varchar'
        },
        {
          name: 'responsavelCidade',
          type: 'varchar'
        },
        {
          name: 'responsavelCpf',
          type: 'varchar'
        },
        {
          name: 'responsavelEmail',
          type: 'varchar'
        },
        {
          name: 'responsavelEstado',
          type: 'varchar'
        },
        {
          name: 'responsavelNascimento',
          type: 'varchar'
        },
        {
          name: 'responsavelNomeCompleto',
          type: 'varchar'
        },
        {
          name: 'responsavelTelefone',
          type: 'varchar'
        },
        {
          name: 'responsavelCep',
          type: 'varchar'
        },
        {
          name: 'material',
          type: 'varchar'
        },
        {
          name: 'pagamento',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'integer'
        },
        {
          name: 'turma_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'AlunoTurma',
          columnNames: ['turma_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'turmas',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('alunos')
  }
}
