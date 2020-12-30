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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Aluno_1 = __importDefault(require("./Aluno"));
let Turma = class Turma {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Turma.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Turma.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Turma.prototype, "lotacao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Turma.prototype, "horario", void 0);
__decorate([
    typeorm_1.OneToMany(() => Aluno_1.default, aluno => aluno.turma, {
        cascade: ['insert', 'update']
    }),
    typeorm_1.JoinColumn({ name: 'aluno_id' }),
    __metadata("design:type", Array)
], Turma.prototype, "alunos", void 0);
Turma = __decorate([
    typeorm_1.Entity('turmas')
], Turma);
exports.default = Turma;
//# sourceMappingURL=Turma.js.map