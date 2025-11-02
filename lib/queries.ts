export const ALL_SCHOOLS_QUERY = `
*[_type == "school"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  country,
  city,
  tuition,
  duration,
  level,
  isFeatured,
  mainImage
}
`

export const SCHOOL_BY_SLUG_QUERY = `
*[_type == "school" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  country,
  city,
  tuition,
  duration,
  level,
  isFeatured,
  mainImage,
  features,
  body
}
`

export const ALL_SCHOOL_SLUGS_QUERY = `
*[_type == "school" && defined(slug.current)][]{
  "slug": slug.current
}
`
