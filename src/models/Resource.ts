import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface ResourceAttributes {
  id: number;
  name: string;
  description: string;
  category: string;
  status: 'active' | 'inactive';
}

class Resource extends Model<ResourceAttributes> implements ResourceAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public category!: string;
  public status!: 'active' | 'inactive';
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  },
  {
    sequelize,
    modelName: 'Resource',
    timestamps: true,
  }
);

export default Resource; 