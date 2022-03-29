import { Request, Response } from 'express'
import { Op } from 'sequelize'
import { getAll } from '../repositories/faq.repository'
import generalResponse from '../helper/generalResponse.helper'

export const getAllFAQ = async (req: Request, res: Response) => {
  try {
    const queryString = req.query.filter
    let getAllData
    if (queryString) {
      getAllData = {
        where: {
          question: { [Op.like]: `%${queryString}%` },
        },
      }
    }
    const data = await getAll(getAllData)
    return generalResponse(res, data)
  } catch (error) {
    return generalResponse(res, error, '', 'error', false, 400)
  }
}
