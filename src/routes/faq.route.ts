import { Router } from 'express'

import { getAllFAQ } from '../controllers/faq.controller'

const FAQ = Router()

FAQ.get('/faq', getAllFAQ)

export default FAQ
