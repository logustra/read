import { httpService } from '@/services'
import PostService from './PostService'

export const postService = new PostService(httpService)
