import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPagamento1609442472674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pagamentos',
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
                    name: 'valor',
                    type: 'numeric(30,2)'
                },
                {
                    name: 'modo',
                    type: 'varchar'
                },
                {
                    name: 'aluno_id',
                    type: 'integer',
                },
                {
                  name: 'data',
                  type: 'varchar'
                },
            ],
            foreignKeys: [
                {
                    name: 'AlunoPagamento',
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
        await queryRunner.dropTable('pagamentos')
    }

}
