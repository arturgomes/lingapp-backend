import {MigrationInterface, QueryRunner} from "typeorm";

export class createObservacoes1610034113217 implements MigrationInterface {

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
            name: 'tipo',
            type: 'varchar'
          },
          {
            name: 'desc',
            type: 'varchar'
          },
         
          {
            name: 'aluno_id',
            type: 'integer',
          }
        ],
        foreignKeys: [
          {
            name: 'AlunoObs',
            columnNames: ['aluno_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'alunos',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
