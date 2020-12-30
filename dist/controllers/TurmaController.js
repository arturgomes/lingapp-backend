"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Yup = __importStar(require("yup"));
const turmas_view_1 = __importDefault(require("../views/turmas_view"));
const Turma_1 = __importDefault(require("../models/Turma"));
exports.default = {
    async index(request, response) {
        const turmasRepository = typeorm_1.getRepository(Turma_1.default);
        const turmas = await turmasRepository.find({
            relations: ['alunos']
        });
        return response.json(turmas_view_1.default.renderMany(turmas));
    },
    async show(request, response) {
        const { id } = request.params;
        const turmasRepository = typeorm_1.getRepository(Turma_1.default);
        const turma = await turmasRepository.findOneOrFail(id, {
            relations: ['alunos']
        });
        return response.json(turmas_view_1.default.render(turma));
    },
    async create(request, response) {
        const { nome, horario, lotacao, } = request.body;
        const turmasRepository = typeorm_1.getRepository(Turma_1.default);
        // const requestImages = request.files as Express.Multer.File[];
        const data = {
            nome,
            horario,
            lotacao
        };
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            horario: Yup.string().required(),
            lotacao: Yup.number().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const turma = turmasRepository.create(data);
        await turmasRepository.save(turma);
        return response.status(201)
            .json(turmas_view_1.default.render(turma));
    }
};
//# sourceMappingURL=TurmaController.js.map