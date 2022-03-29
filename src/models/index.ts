import Faq from './faq'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([Faq.sync({ alter: isDev || isTest })])

export default dbInit
