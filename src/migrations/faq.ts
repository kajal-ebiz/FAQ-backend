import { QueryInterface, DataTypes } from 'sequelize'

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('faq', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    question: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    answer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  })
}
export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('faq')
}
