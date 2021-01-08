import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addInstaShirt1610030763674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns('orphanages', [
        new TableColumn({
          name: 'opening_hours',
          type: 'varchar'
        }
        )
    ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
