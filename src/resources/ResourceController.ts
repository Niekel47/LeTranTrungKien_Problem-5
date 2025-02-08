import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import ResourceService from './resourceService';

class ResourceController {
  private resourceService: ResourceService;

  constructor(sequelize: Sequelize) {
    this.resourceService = new ResourceService(sequelize);
  }

  createResource = async(req: Request, res: Response) => {
    try {
      const resource = await this.resourceService.createResource(req);
      return res.status(201).json(resource);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating resource' });
    }
  }

  getResources = async(req: Request, res: Response) => {
    try {
      const resources = await this.resourceService.getResources(req);
      return res.json(resources);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching resources' });
    }
  }

  getResourceById = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const resource = await this.resourceService.getResourceById(id);
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      return res.json(resource);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching resource' });
    }
  }

 updateResource = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const resource = await this.resourceService.updateResource(id, req.body);
      return res.json(resource);
    } catch (error) {
      return res.status(500).json({ error: 'Error updating resource' });
    }
  }

  deleteResource = async(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const resource = await this.resourceService.deleteResource(id);
      return res.json(resource);
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting resource' });
    }
  }
}

export default ResourceController;