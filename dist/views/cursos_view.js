"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alunos_view_1 = __importDefault(require("./alunos_view"));
exports.default = {
    render(curso) {
        return {
            id: curso.id,
            material: curso.material,
            pagamento: curso.pagamento,
            status: curso.status,
            aluno: alunos_view_1.default.renderNm(curso.aluno),
        };
    },
    renderMany(cursos) {
        return cursos.map(curso => this.render(curso));
    }
};
//# sourceMappingURL=cursos_view.js.map