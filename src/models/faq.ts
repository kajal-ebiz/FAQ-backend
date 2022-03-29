import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db/connection'

interface FaqAttributes {
  id: number
  question: string
  answer: string
  createdAt?: Date
  updatedAt?: Date
}
export interface FaqInput extends Optional<FaqAttributes, 'id'> {}
export interface FaqOutput extends Required<FaqAttributes> {}

class Faq extends Model<FaqAttributes, FaqInput> implements FaqAttributes {
  public id!: number
  public question!: string
  public answer!: string

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Faq.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'faq',
  },
)

export default Faq
