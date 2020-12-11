import Http from './Http'

export const httpService = new Http({
  baseURL: process.env.API_URL,
  timeout: Number(process.env.TIMEOUT)
})
