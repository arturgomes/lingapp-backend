import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'; 

<<<<<<< HEAD
import OrphanagesController from './controllers/OrphanagesController';
=======
import TurmaController from './controllers/TurmaController';
import AlunoController from './controllers/AlunoController';
// import PagamentoController from './controllers/PagamentoController';
>>>>>>> c420e58b0c84ac4a8aefe83a0e95e0c67ea935b4

const routes = Router();
const upload = multer(multerConfig);

<<<<<<< HEAD
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
=======
routes.get('/turma', TurmaController.index);
routes.get('/turma/:id', TurmaController.show);

routes.post('/turma', upload.array('images'), TurmaController.create);
routes.post('/aluno', AlunoController.create);
routes.get('/aluno', AlunoController.index);
// routes.get('/pagamento/:aluno_id', PagamentoController.create);
// routes.get('/orphanages', OrphanagesController.index);
// routes.get('/orphanages/:id', OrphanagesController.show);

// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
>>>>>>> c420e58b0c84ac4a8aefe83a0e95e0c67ea935b4

export default routes;