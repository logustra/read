import axios, { AxiosInstance } from 'axios'

export default class Http {
  protected axios: AxiosInstance

  public constructor (axiosConfig: object) {
    this.axios = axios.create(axiosConfig)
  }

  /**
   * Perform GET request.
   *
   * @param  {string} url
   * @param  {object} params
   * @param  {string} responseType
   */
  public get (url: string, params?: {}, responseType?: string) {
    try {
      const config: any = {
        method: 'get',
        url,
        params
      }

      if (responseType) {
        config.responseType = responseType
      }

      return this.axios.request(config)
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Perform POST request.
   *
   * @param  {string} url
   * @param  {object} data
   */
  public post (url: string, data: object) {
    try {
      return this.axios.request({
        method: 'post',
        url,
        data
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Perform PUT request.
   *
   * @param  {string} url
   * @param  {object} data
   */
  public put (url: string, data: object) {
    try {
      return this.axios.request({
        method: 'put',
        url,
        data
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Perform PATCH request.
   *
   * @param  {string} url
   * @param  {object} data
   */
  public patch (url: string, data: object) {
    try {
      return this.axios.request({
        method: 'patch',
        url,
        data
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * Perform DELETE request.
   *
   * @param  {string} url
   */
  public delete (url: string) {
    try {
      return this.axios.request({
        method: 'delete',
        url
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
