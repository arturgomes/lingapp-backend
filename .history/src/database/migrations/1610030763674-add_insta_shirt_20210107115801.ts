import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class addInstaShirt1610030763674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns('alunos', [
        new TableColumn({
          name: 'camiseta',
          type: 'varchar'
        },
        new TableColumn({
          name: 'instagram',
          type: 'varchar'
        })
    ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
