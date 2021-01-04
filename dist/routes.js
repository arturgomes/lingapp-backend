"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const TurmaController_1 = __importDefault(require("./controllers/TurmaController"));
const AlunoController_1 = __importDefault(require("./controllers/AlunoController"));
const routes = express_1.Router();
const upload = multer_1.default(multer_2.default);
routes.get('/turma', TurmaController_1.default.index);
routes.get('/turma/:id', TurmaController_1.default.show);
routes.post('/turma', upload.array('images'), TurmaController_1.default.create);
routes.post('/aluno', AlunoController_1.default.create);
routes.get('/aluno', AlunoController_1.default.index);
// routes.get('/orphanages', OrphanagesController.index);
// routes.get('/orphanages/:id', OrphanagesController.show);
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
exports.default = routes;
//# sourceMappingURL=routes.js.map