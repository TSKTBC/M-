import SchoolCard from "@/components/SchoolCard"
import {ALL_SCHOOLS_QUERY} from "@/lib/queries"
import {sanityClient} from "@/lib/sanity.client"

export default async function SchoolsPage() {
  const schools = await sanityClient.fetch(ALL_SCHOOLS_QUERY)

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">留学先の学校一覧</h1>
      <p className="text-gray-500 mb-8">国・都市・費用の目安で比較できます。</p>
      <div className="grid gap-6 md:grid-cols-3">
        {schools.map((school: any) => (
          <SchoolCard key={school._id} school={school} />
        ))}
      </div>
    </div>
  )
}
