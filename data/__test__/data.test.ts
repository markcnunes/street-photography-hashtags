import mainCategories, { brands, locations } from 'data'

describe('Data', () => {
  it('has unique hashtags on each category', () => {
    mainCategories.forEach(item => expect(item.keywords).toBeDistinct())
    brands.forEach(item => expect(item.keywords).toBeDistinct())
    locations.forEach(item => expect(item.keywords).toBeDistinct())
  })
  it('has unique hashtags on th whole data', () => {
    const mainKeywords = mainCategories.map(item => item.keywords)
    const brandKeywords = brands.map(item => item.keywords)
    const locationKeywords = locations.map(item => item.keywords)

    const allKeywords = [
      ...mainKeywords,
      ...brandKeywords,
      ...locationKeywords
    ].flat()

    expect(allKeywords).toBeDistinct()
  })
})
