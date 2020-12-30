"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Aluno_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Turma_1 = __importDefault(require("./Turma"));
let Aluno = Aluno_1 = class Aluno {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Aluno.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "alunoFirstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "alunoLastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "alunoNascimento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "alunoTelefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "alunoEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelAddress1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelAddress2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelBairro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelCidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelCpf", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelEstado", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelNascimento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelNomeCompleto", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelTelefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Aluno.prototype, "responsavelCep", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Aluno_1, aluno => aluno.turma)
    // @OneToMany(() => Image, image => image.orphanage, {
    //   cascade: ['insert', 'update']
    // })
    ,
    typeorm_1.JoinColumn({ name: 'turma_id' }),
    __metadata("design:type", Turma_1.default)
], Aluno.prototype, "turma", void 0);
Aluno = Aluno_1 = __decorate([
    typeorm_1.Entity('alunos')
], Aluno);
exports.default = Aluno;
//# sourceMappingURL=Aluno.js.map