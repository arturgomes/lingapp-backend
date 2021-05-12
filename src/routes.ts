import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import TurmaController from './controllers/TurmaController';
import TurmaListController from './controllers/TurmaListController';
import AlunoController from './controllers/AlunoController';
import ChangeStatusController from './controllers/ChangeStatusController';
import ChangeClassController from './controllers/ChangeClassController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/turma', TurmaController.index);
routes.get('/turma/:id', TurmaController.show);
routes.get('/turmalista', TurmaListController.index);
routes.get('/turmalistaall', TurmaListController.fetch);
routes.post('/turma', upload.array('images'), TurmaController.create);
routes.post('/aluno', AlunoController.create);
routes.get('/aluno', AlunoController.index);
routes.post('/aluno/:id', AlunoController.show);
routes.post('/aluno/status/:id/:status', ChangeStatusController.update);
routes.post('/aluno/class/:id/:classe', ChangeClassController.update);
routes.post('/aluno/update/:id', AlunoController.update);

export default routes;
