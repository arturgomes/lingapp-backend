import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'; 

import TurmaController from './controllers/TurmaController';
// import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/turma', TurmaController.index);
routes.get('/turma/:id', TurmaController.show);

routes.post('/turma', upload.array('images'), TurmaController.create);
// routes.get('/orphanages', OrphanagesController.index);
// routes.get('/orphanages/:id', OrphanagesController.show);

// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;