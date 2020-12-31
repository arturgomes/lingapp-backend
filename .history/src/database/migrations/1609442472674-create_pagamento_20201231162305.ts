import {MigrationInterface, QueryRunner} from "typeorm";

export class createPagamento1609442472674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'pagamentos',
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
                    name:'valor',
                    type:'numeric('
                }

            ]


        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
