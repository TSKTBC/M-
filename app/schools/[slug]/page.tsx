import {sanityClient} from "@/lib/sanity.client"
import {ALL_SCHOOL_SLUGS_QUERY, SCHOOL_BY_SLUG_QUERY} from "@/lib/queries"
import {PortableText} from "@portabletext/react"

export async function generateStaticParams() {
  const slugs: {slug: string}[] = await sanityClient.fetch(ALL_SCHOOL_SLUGS_QUERY)
  return slugs.map((item) => ({slug: item.slug}))
}

async function getSchool(slug: string) {
  return sanityClient.fetch(SCHOOL_BY_SLUG_QUERY, {slug})
}

export default async function SchoolDetailPage({params}: {params: {slug: string}}) {
  const school = await getSchool(params.slug)

  if (!school) {
    return <div className="max-w-4xl mx-auto py-10 px-4">学校が見つかりませんでした。</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{school.title}</h1>
      <p className="text-gray-500 mb-6">
        {school.country ? school.country.toUpperCase() : ""} {school.city ? ` / ${school.city}` : ""}
      </p>
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="md:col-span-2">
          {school.body ? (
            <div className="prose max-w-none">
              <PortableText value={school.body} />
            </div>
          ) : (
            <p className="text-gray-500">この学校の詳細は準備中です。</p>
          )}
        </div>
        <div className="bg-white rounded-2xl border p-4">
          {school.tuition ? (
            <p className="mb-3">
              <span className="text-xs text-gray-500">目安学費</span>
              <br />
              <span className="text-xl font-semibold">{school.tuition.toLocaleString()}円〜</span>
            </p>
          ) : null}
          {school.duration ? (
            <p className="mb-2">
              <span className="text-xs text-gray-500">期間</span>
              <br />
              {school.duration}
            </p>
          ) : null}
          {school.level ? (
            <p className="mb-2">
              <span className="text-xs text-gray-500">対象レベル</span>
              <br />
              {school.level}
            </p>
          ) : null}
          {school.features && school.features.length > 0 ? (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">特徴</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {school.features.map((f: string) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <a
        href="/contact"
        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        この学校について相談する
      </a>
    </div>
  )
}
