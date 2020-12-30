const MigrationInterface = require("typeorm");
const QueryRunner = require("typeorm");
const Table = require("typeorm");

export class createOrphanages1601399238009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'turmas',
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
          name: 'nome',
          type: 'varchar',
        },
        {
          name: 'lotacao',
          type: 'integer',
        },
        {
          name: 'horario',
          type: 'varchar',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('turmas');
  }
}
