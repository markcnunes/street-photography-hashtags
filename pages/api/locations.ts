import { locations } from 'data'

export default (req, res): void => {
  res.statusCode = 200
  res.json(locations)
}
