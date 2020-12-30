"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImages1601404945917 = void 0;
const typeorm_1 = require("typeorm");
class createImages1601404945917 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'alunos',
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
                    name: 'alunoFirstName',
                    type: 'varchar'
                },
                {
                    name: 'alunoLastName',
                    type: 'varchar'
                },
                {
                    name: 'alunoNascimento',
                    type: 'varchar'
                },
                {
                    name: 'alunoTelefone',
                    type: 'varchar'
                },
                {
                    name: 'alunoEmail',
                    type: 'varchar'
                },
                {
                    name: 'responsavelAddress1',
                    type: 'varchar'
                },
                {
                    name: 'responsavelAddress2',
                    type: 'varchar'
                },
                {
                    name: 'responsavelBairro',
                    type: 'varchar'
                },
                {
                    name: 'responsavelCidade',
                    type: 'varchar'
                },
                {
                    name: 'responsavelCpf',
                    type: 'varchar'
                },
                {
                    name: 'responsavelEmail',
                    type: 'varchar'
                },
                {
                    name: 'responsavelEstado',
                    type: 'varchar'
                },
                {
                    name: 'responsavelNascimento',
                    type: 'varchar'
                },
                {
                    name: 'responsavelNomeCompleto',
                    type: 'varchar'
                },
                {
                    name: 'responsavelTelefone',
                    type: 'varchar'
                },
                {
                    name: 'responsavelCep',
                    type: 'varchar'
                },
                // {
                //   name: 'cursoTurma',
                //   type: 'varchar'
                // },
                // {
                //   name: 'cursoMaterial',
                //   type: 'varchar'
                // },
                // {
                //   name: 'cursoPagamento',
                //   type: 'varchar'
                // },
                {
                    name: 'turma_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'AlunoTurma',
                    columnNames: ['turma_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'turmas',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('alunos');
    }
}
exports.createImages1601404945917 = createImages1601404945917;
//# sourceMappingURL=1601404945917-create_alunos.js.map