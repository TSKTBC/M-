import Link from "next/link"
import CTASection from "@/components/CTASection"
import Hero from "@/components/Hero"
import SchoolCard from "@/components/SchoolCard"
import {FEATURED_SCHOOLS_QUERY, type SchoolCardFragment} from "@/lib/queries"
import {sanityClient} from "@/lib/sanity.client"

export const revalidate = 60

async function getFeaturedSchools() {
  return sanityClient.fetch<SchoolCardFragment[]>(FEATURED_SCHOOLS_QUERY)
}

const achievements = [
  {
    title: "トップスクール合格率",
    value: "85%",
    description: "アイビーリーグを含むトップ校への合格をサポート。最新の出願トレンドに基づいた戦略で実現します。",
  },
  {
    title: "奨学金獲得サポート",
    value: "3.2億円",
    description: "過去3年間での奨学金獲得総額。エッセイ添削から面接対策まで、専任チームが伴走します。",
  },
  {
    title: "現地パートナー",
    value: "40都市",
    description: "世界主要都市にパートナーが常駐。生活サポートやキャリア支援までワンストップで提供します。",
  },
]

export default async function HomePage() {
  const featuredSchools = await getFeaturedSchools()
  const featuredList = featuredSchools ?? []

  return (
    <div>
      <Hero />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {achievements.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">{item.title}</p>
                <p className="mt-4 text-4xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-heading">ピックアップ学校</h2>
              <p className="section-subheading">
                Beyondが厳選した注目の学校をご紹介。専門領域やキャリアゴールに合わせて最適な選択が可能です。
              </p>
            </div>
            <Link
              href="/schools"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              すべての学校を見る
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredList.length > 0 ? (
              featuredList.map((school) => <SchoolCard key={school._id} school={school} />)
            ) : (
              <p className="text-sm text-slate-500">現在ピックアップ中の学校はありません。</p>
            )}
          </div>
        </div>
      </section>

      <CTASection />

      <section id="contact" className="section-padding bg-white">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-900/95 px-8 py-12 text-white shadow-card sm:px-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">コンシェルジュへのお問い合わせ</h2>
            <p className="text-sm leading-relaxed text-slate-200">
              留学準備や現地生活に関するご不明点は、Beyondコンシェルジュチームまでお気軽にご相談ください。メールまたはお電話で24時間以内にご返信いたします。
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Email</p>
                <p className="mt-2 text-lg font-semibold">concierge@beyond.example.com</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Phone</p>
                <p className="mt-2 text-lg font-semibold">03-1234-5678 (平日10:00-19:00)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
