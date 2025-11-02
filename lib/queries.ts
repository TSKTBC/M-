export const SCHOOL_CARD_FRAGMENT = `
  _id,
  title,
  "slug": slug.current,
  country,
  city,
  tuition,
  duration,
  level,
  isFeatured,
  features,
  mainImage
`

export const ALL_SCHOOLS_QUERY = `
*[_type == "school"] | order(title asc) {
  ${SCHOOL_CARD_FRAGMENT}
}
`

export const FEATURED_SCHOOLS_QUERY = `
*[_type == "school" && isFeatured == true] | order(title asc) [0...6] {
  ${SCHOOL_CARD_FRAGMENT}
}
`

export const ALL_SCHOOL_SLUGS_QUERY = `
*[_type == "school" && defined(slug.current)]{
  "slug": slug.current
}
`

export const SCHOOL_DETAIL_QUERY = `
*[_type == "school" && slug.current == $slug][0] {
  ${SCHOOL_CARD_FRAGMENT},
  body
}
`

export type SchoolCardFragment = {
  _id: string
  title: string
  slug: string
  country?: string
  city?: string
  tuition?: number
  duration?: string
  level?: string
  isFeatured?: boolean
  features?: string[]
  mainImage?: any
}

export type SchoolDetail = SchoolCardFragment & {
  body?: any
}
