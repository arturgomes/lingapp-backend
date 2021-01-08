import {MigrationInterface, QueryRunner} from "typeorm";

export class addInstaShirt1610030763674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn("alunos",'camiseta',string)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
