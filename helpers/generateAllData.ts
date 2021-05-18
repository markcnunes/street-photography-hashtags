import { Category } from 'data/types'

/**
 * It gets all categories not assigned as locations or brands and saves
 * as subcategory of All.
 */
const generateAllData = (categories: Category[]): Category => {
  return {
    category: 'all',
    icon: 'GiBallPyramid' as const,
    subcategories: categories
  }
}

export default generateAllData
