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
const alunos_view_1 = __importDefault(require("../views/alunos_view"));
const Aluno_1 = __importDefault(require("../models/Aluno"));
const Turma_1 = __importDefault(require("../models/Turma"));
const Curso_1 = __importDefault(require("../models/Curso"));
exports.default = {
    async index(request, response) {
        const alunosRepository = typeorm_1.getRepository(Aluno_1.default);
        const alunos = await alunosRepository.find({
            relations: ['turma']
        });
        return response.json(alunos_view_1.default.renderMany(alunos));
    },
    async show(request, response) {
        const { id } = request.params;
        const alunosRepository = typeorm_1.getRepository(Aluno_1.default);
        const aluno = await alunosRepository.findOneOrFail(id
        // , 
        //   {
        //   relations: ['turma']
        // }
        );
        return response.json(alunos_view_1.default.render(aluno));
    },
    async create(request, response) {
        const { alunoFirstName, alunoLastName, alunoNascimento, alunoTelefone, alunoEmail, responsavelAddress1, responsavelAddress2, responsavelBairro, responsavelCidade, responsavelCpf, responsavelEmail, responsavelEstado, responsavelNascimento, responsavelNomeCompleto, responsavelTelefone, responsavelCep, turma, } = request.body;
        const alunosRepository = typeorm_1.getRepository(Aluno_1.default);
        const turmaRepository = typeorm_1.getRepository(Turma_1.default);
        const schema = Yup.object().shape({
            alunoFirstName: Yup.string().required(),
            alunoLastName: Yup.string().required(),
            alunoNascimento: Yup.string().required(),
            alunoTelefone: Yup.string().required(),
            alunoEmail: Yup.string().required(),
            responsavelAddress1: Yup.string().required(),
            responsavelAddress2: Yup.string().required(),
            responsavelBairro: Yup.string().required(),
            responsavelCidade: Yup.string().required(),
            responsavelCpf: Yup.string().required(),
            responsavelEmail: Yup.string().required(),
            responsavelEstado: Yup.string().required(),
            responsavelNascimento: Yup.string().required(),
            responsavelNomeCompleto: Yup.string().required(),
            responsavelTelefone: Yup.string().required(),
            responsavelCep: Yup.string().required(),
            turma: Yup.number().required(),
        });
        const data = {
            alunoFirstName,
            alunoLastName,
            alunoNascimento,
            alunoTelefone,
            alunoEmail,
            responsavelAddress1,
            responsavelAddress2,
            responsavelBairro,
            responsavelCidade,
            responsavelCpf,
            responsavelEmail,
            responsavelEstado,
            responsavelNascimento,
            responsavelNomeCompleto,
            responsavelTelefone,
            responsavelCep,
            turma
            // cursoAluno,
            // cursoMaterial,
            // cursoPagamento, 
        };
        await schema.validate(data, {
            abortEarly: false,
        });
        //contar numero de alunos e ver se já lotou turma
        const turmas = await turmaRepository.findOneOrFail({ id: turma }, {
            relations: ['alunos']
        });
        console.log(turmas.alunos.length);
        if (turmas.alunos.length < turmas.lotacao) {
            const aluno = alunosRepository.create(data);
            await alunosRepository.save(aluno);
            const { cursoMaterial, cursoPagamento, cursoStatus, } = request.body;
            const cursosRepository = typeorm_1.getRepository(Curso_1.default);
            // const requestImages = request.files as Express.Multer.File[];
            const curso_data = {
                material: cursoMaterial,
                pagamento: cursoPagamento,
                status: cursoStatus,
                aluno: aluno
            };
            const schema = Yup.object().shape({
                material: Yup.string().required(),
                pagamento: Yup.string().required(),
                status: Yup.number().required(),
                aluno: Yup.object().required(),
            });
            await schema.validate(curso_data, {
                abortEarly: false,
            });
            const curso = cursosRepository.create(curso_data);
            await cursosRepository.save(curso);
            return response.status(201)
                .json(alunos_view_1.default.render(aluno));
        }
        else {
            response.status(400).json({ message: "turma lotada" });
        }
    }
};
//# sourceMappingURL=AlunoController.js.map