import { Router, Request, Response, NextFunction } from 'express';
import ResourceController from './ResourceController';
import sequelize from '../config/database';

const router = Router();
const resourceController = new ResourceController(sequelize);


router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await resourceController.createResource(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await resourceController.getResources(req, res);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await resourceController.getResourceById(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await resourceController.updateResource(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await resourceController.deleteResource(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;