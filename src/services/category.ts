import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 分类的列表
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
