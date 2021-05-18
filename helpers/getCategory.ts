import { Category, CategoryWithoutIcon } from 'data/types'
import mainCategories, { brands, locations } from 'data'
import generateAllData from 'helpers/generateAllData'

/**
 * It finds the category and returns the data.
 */
const getCategory = (categoryName: string): Category | CategoryWithoutIcon => {
  if (categoryName === 'all') {
    return generateAllData(mainCategories)
  }
  // main categories
  else if (mainCategories.find(item => item.category === categoryName)) {
    return mainCategories.filter(item => item.category === categoryName)[0]
  }
  // brands
  else if (brands.find(item => item.category === categoryName)) {
    return brands.filter(item => item.category === categoryName)[0]
  }
  // locations
  else if (locations.find(item => item.category === categoryName)) {
    return locations.filter(item => item.category === categoryName)[0]
  }
}

export default getCategory
