"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCursoNovo1609284486143 = void 0;
const typeorm_1 = require("typeorm");
class createCursoNovo1609284486143 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    referencedTableName: 'alunos',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.createCursoNovo1609284486143 = createCursoNovo1609284486143;
//# sourceMappingURL=1609284486143-create_curso_novo.js.map