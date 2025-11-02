import {PortableText, type PortableTextComponents} from "@portabletext/react"
import Image from "next/image"
import {notFound} from "next/navigation"
import SchoolCard from "@/components/SchoolCard"
import {
  ALL_SCHOOL_SLUGS_QUERY,
  SCHOOL_CARD_FRAGMENT,
  SCHOOL_DETAIL_QUERY,
  type SchoolCardFragment,
  type SchoolDetail,
} from "@/lib/queries"
import {sanityClient} from "@/lib/sanity.client"
import {urlFor} from "@/lib/sanity.image"

export const revalidate = 60

type Props = {
  params: {slug: string}
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({value}) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="my-8 overflow-hidden rounded-2xl">
          <Image
            src={urlFor(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            width={1200}
            height={800}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      )
    },
  },
  marks: {
    link: ({children, value}) => {
      const href = value?.href || "#"
      const isExternal = typeof href === "string" && href.startsWith("http")
      return (
        <a
          href={href}
          className="text-brand-500 underline"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

async function getSchool(slug: string) {
  return sanityClient.fetch<SchoolDetail>(SCHOOL_DETAIL_QUERY, {slug})
}

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<{slug: string}[]>(ALL_SCHOOL_SLUGS_QUERY)
  return slugs.map(({slug}) => ({slug}))
}

export async function generateMetadata({params}: Props) {
  const school = await getSchool(params.slug)

  if (!school) {
    return {
      title: "学校情報",
    }
  }

  const location = [school.country, school.city].filter(Boolean).join(" / ")

  return {
    title: `${school.title} | Beyond`,
    description: location ? `${school.title} (${location}) の詳細情報` : `${school.title} の詳細情報`,
  }
}

export default async function SchoolDetailPage({params}: Props) {
  const school = await getSchool(params.slug)

  if (!school) {
    notFound()
  }

  const featured =
    (await sanityClient.fetch<SchoolCardFragment[]>(
      `*[_type == "school" && slug.current != $slug][0...3]{
        ${SCHOOL_CARD_FRAGMENT}
      }`,
      {slug: params.slug},
    )) ?? []

  const location = [school.country, school.city].filter(Boolean).join(" / ")

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          {school.mainImage ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <Image
                src={urlFor(school.mainImage).width(1200).height(675).fit("crop").url()}
                alt={school.title}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="p-8 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{school.title}</h1>
                {location ? <p className="mt-2 text-sm text-slate-500">{location}</p> : null}
              </div>
              <div className="flex flex-col items-start gap-2 text-sm text-slate-600 sm:items-end">
                {school.level ? (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
                    {school.level}
                  </span>
                ) : null}
                {school.tuition ? <span>学費目安: {school.tuition.toLocaleString()}円〜</span> : null}
                {school.duration ? <span>プログラム期間: {school.duration}</span> : null}
              </div>
            </div>
            {school.features && school.features.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {school.features.map((feature) => (
                  <li key={feature} className="rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-600">
                    {feature}
                  </li>
                ))}
              </ul>
            ) : null}
            {school.body ? (
              <article className="prose prose-slate mt-10 max-w-none">
                <PortableText value={school.body} components={portableTextComponents} />
              </article>
            ) : (
              <p className="mt-10 text-sm text-slate-500">現在、詳細情報を準備中です。</p>
            )}
          </div>
        </div>

        {featured.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-slate-900">他の学校を見る</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {featured.map((item) => (
                <SchoolCard key={item._id} school={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

