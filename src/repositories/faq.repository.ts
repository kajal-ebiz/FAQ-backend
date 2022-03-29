import Faq, { FaqOutput } from '../models/faq'

export const getAll = async (data?: any): Promise<FaqOutput[]> => {
  return data ? Faq.findAll({ ...data }) : Faq.findAll()
}
