import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class addInsta1610031542743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns('alunos', [
        new TableColumn({
          name: 'instagram',
          type: 'varchar'
        }
        )
    ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
