import { GetStaticProps } from 'next'
import Head from 'next/head'
import LayoutCategory from 'components/LayoutCategory'
import getCategory from 'helpers/getCategory'
import mainCategories, { brands, locations } from 'data'

function Category({ category }) {
  return (
    <>
      <Head>
        <title>Street Photography Hashtags - {category.category}</title>
        <meta
          name="description"
          content={`A curation of hashtags related to ${category.category} for street photography on Instagram.`}
        />
      </Head>
      <LayoutCategory
        category={category.category}
        icon={category.icon}
        keywords={category.keywords}
        subcategories={category.subcategories}
      />
    </>
  )
}

export default Category

// Create a slug for each [category]
export const getStaticPaths = async () => {
  const paths = await fetchCatagoriesPaths()

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params.category as string

  const category = getCategory(categorySlug)

  // Pass post data to the page via props
  return {
    props: {
      category: category
    },
    notFound: !category
  }
}

const fetchCatagoriesPaths = async (): Promise<{ params: any }[]> => {
  // This is a category to show all keywords from the other categories
  const allCategoriesPath = {
    params: { category: 'all' }
  }

  const mainCategoriesPaths = mainCategories
    .map(category => ({
      params: { category: category.category }
    }))
    .flat()

  // It creates different paths for each brand
  const brandsPath = brands.map(location => ({
    params: { category: location.category }
  }))

  // It creates different paths for each location
  const locationsPath = locations.map(location => ({
    params: { category: location.category }
  }))

  return [
    allCategoriesPath,
    ...mainCategoriesPaths,
    ...brandsPath,
    ...locationsPath
  ]
}
