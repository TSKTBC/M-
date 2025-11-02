import SchoolCard from "@/components/SchoolCard"
import {ALL_SCHOOLS_QUERY, type SchoolCardFragment} from "@/lib/queries"
import {sanityClient} from "@/lib/sanity.client"

export const revalidate = 60

async function getSchools() {
  return sanityClient.fetch<SchoolCardFragment[]>(ALL_SCHOOLS_QUERY)
}

export default async function SchoolsPage() {
  const schools = await getSchools()

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="section-heading">留学先の学校一覧</h1>
            <p className="section-subheading">
              世界中の大学・語学学校・専門機関からあなたに最適な選択肢を。条件で絞り込んで、自分だけの留学プランを見つけましょう。
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schools.length > 0 ? (
            schools.map((school) => <SchoolCard key={school._id} school={school} />)
          ) : (
            <p className="text-sm text-slate-500">現在、登録されている学校はありません。</p>
          )}
        </div>
      </div>
    </div>
  )
}
