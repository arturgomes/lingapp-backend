"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alunos_view_1 = __importDefault(require("./alunos_view"));
exports.default = {
    render(turma) {
        return {
            id: turma.id,
            nome: turma.nome,
            lotacao: turma.lotacao,
            vagas: turma.lotacao - turma.alunos.length,
            horario: turma.horario,
            alunos: alunos_view_1.default.renderName(turma.alunos),
        };
    },
    renderMany(turmas) {
        return turmas.map(turma => this.render(turma));
    }
};
//# sourceMappingURL=turmas_view.js.map