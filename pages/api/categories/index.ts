import mainCategories from 'data'

export default (req, res): void => {
  res.statusCode = 200
  res.json(mainCategories)
}
