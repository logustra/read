import { httpService } from '@/services'
import PostService from './postService'

export const postService = new PostService(httpService)
