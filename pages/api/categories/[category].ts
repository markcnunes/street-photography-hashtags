import getCategory from 'helpers/getCategory'

export default function categoryHandler({ query: { category } }, res) {
  const data = getCategory(category)

  // Category / location with this name exists
  if (data) {
    res.status(200).json(data)
  } else {
    res
      .status(404)
      .json({ message: `Catagory with the name: ${category} not found.` })
  }
}
