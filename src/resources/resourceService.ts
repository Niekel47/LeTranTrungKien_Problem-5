import { Request } from 'express';
import { Sequelize, Op } from 'sequelize';
import Resource from '../models/Resource';

class ResourceService {
  private sequelize: Sequelize;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
  }

  createResource = async (req: Request) => {
    const transaction = await this.sequelize.transaction();
    try {
      const resource = await Resource.create(req.body, { transaction });
      await transaction.commit();
      return resource;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };

  getResources = async (req: Request) => {
    try {
      const { category, status, search } = req.query;
      const where: any = {};

      if (category) {
        where.category = category;
      }
      if (status) {
        where.status = status;
      }
      if (search) {
        where.name = { [Op.iLike]: `%${search}%` };
      }

      const resources = await Resource.findAll({ where });
      return resources;
    } catch (error) {
      throw error;
    }
  };

  getResourceById = async (id: string) => {
    try {
      const resource = await Resource.findByPk(id);
      if (!resource) {
        throw new Error('Resource not found');
      }
      return resource;
    } catch (error) {
      throw error;
    }
  };

  updateResource = async (id: string, data: any) => {
    const transaction = await this.sequelize.transaction();
    try {
      const resource = await Resource.findByPk(id, { transaction });
      if (!resource) {
        throw new Error('Resource not found');
      }
      const updatedResource = await resource.update(data, { transaction });
      await transaction.commit();
      return updatedResource;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };

  deleteResource = async (id: any) => {
    const transaction = await this.sequelize.transaction();
    try {
      const resource = await Resource.findByPk(id, { transaction });
      if (!resource) {
        throw new Error('Resource not found');
      }
      await resource.destroy({ transaction });
      await transaction.commit();
      return resource;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
}

export default ResourceService;