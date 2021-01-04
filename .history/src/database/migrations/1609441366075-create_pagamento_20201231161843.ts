import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPagamento1609441366075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'pagamentos'
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'valor'
                    type:'numeric('
                }

            ]


        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
