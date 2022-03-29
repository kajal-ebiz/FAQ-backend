import { QueryInterface } from 'sequelize'
import { default as data } from '../data/faq.json'

export async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('faq', [...data], {})
}
export async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('faq', {})
}
