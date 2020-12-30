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
const cursos_view_1 = __importDefault(require("../views/cursos_view"));
const Curso_1 = __importDefault(require("../models/Curso"));
exports.default = {
    async index(request, response) {
        const cursosRepository = typeorm_1.getRepository(Curso_1.default);
        const cursos = await cursosRepository.find({
            relations: ['alunos']
        });
        return response.json(cursos_view_1.default.renderMany(cursos));
    },
    async show(request, response) {
        const { id } = request.params;
        const cursosRepository = typeorm_1.getRepository(Curso_1.default);
        const curso = await cursosRepository.findOneOrFail(id, {
            relations: ['alunos']
        });
        return response.json(cursos_view_1.default.render(curso));
    },
    async create(request, response) {
        const { material, pagamento, status, aluno } = request.body;
        const cursosRepository = typeorm_1.getRepository(Curso_1.default);
        // const requestImages = request.files as Express.Multer.File[];
        const data = {
            material,
            pagamento,
            status,
            aluno
        };
        const schema = Yup.object().shape({
            material: Yup.string().required(),
            pagamento: Yup.string().required(),
            status: Yup.number().required(),
            aluno: Yup.number().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const curso = cursosRepository.create(data);
        await cursosRepository.save(curso);
        return response.status(201)
            .json(cursos_view_1.default.render(curso));
    }
};
//# sourceMappingURL=CursoController.js.map