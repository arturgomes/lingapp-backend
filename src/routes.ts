import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'; 

import TurmaController from './controllers/TurmaController';
import AlunoController from './controllers/AlunoController';
import ChangeStatusController from './controllers/ChangeStatusController';
// import PagamentoController from './controllers/PagamentoController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/turma', TurmaController.index);
routes.get('/turma/:id', TurmaController.show);

routes.post('/turma', upload.array('images'), TurmaController.create);
routes.post('/aluno', AlunoController.create);
routes.get('/aluno', AlunoController.index);
routes.post('/aluno/:id', AlunoController.show);
routes.post('/aluno/status/:id/:status', ChangeStatusController.update);
routes.post('/aluno/update/:id', ChangeStatusController.update);
// routes.get('/pagamento/:aluno_id', PagamentoController.create);
// routes.get('/orphanages', OrphanagesController.index);
// routes.get('/orphanages/:id', OrphanagesController.show);

// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;