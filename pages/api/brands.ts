import { brands } from 'data'

export default (req, res): void => {
  res.statusCode = 200
  res.json(brands)
}
