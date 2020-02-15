import Http from '@/services/Http'

export default class PostService {
  protected http: Http

  constructor(http: Http) {
    this.http = http
  }

  public async get(url: string, params?: {}) {
    try {
      return await this.http.get(url, params)
    } catch (error) {
      throw error
    }
  }
}
