import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCursoNovo1609284486143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'cursos',
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
                name: 'aluno_id',
                type: 'integer',
              }
            ],
            foreignKeys: [
              {
                name: 'CursoAluno',
                columnNames: ['aluno_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'aluno',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
              }
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
