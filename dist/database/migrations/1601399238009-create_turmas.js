"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrphanages1601399238009 = void 0;
const typeorm_1 = require("typeorm");
class createOrphanages1601399238009 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('turmas');
    }
}
exports.createOrphanages1601399238009 = createOrphanages1601399238009;
//# sourceMappingURL=1601399238009-create_turmas.js.map