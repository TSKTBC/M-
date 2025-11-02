import Image from "next/image"
import Link from "next/link"

const stats = [
  {label: "サポート実績", value: "1,200+"},
  {label: "提携校", value: "65"},
  {label: "満足度", value: "98%"},
]

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 translate-x-1/4 rounded-l-3xl bg-brand-100/70 blur-3xl lg:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
            Beyond Premium Study Abroad
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            世界を舞台に、本物の成長を。
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Beyond は、世界中のトップスクールとのネットワークを活かし、あなたのキャリアに最適な留学体験をデザインします。
            専任のカウンセラーが入学から滞在まで丁寧に伴走し、夢を確かな実現へと導きます。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              無料カウンセリングを予約
            </a>
            <Link
              href="/schools"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              学校を探す
            </Link>
          </div>
          <dl className="mt-12 grid gap-6 text-sm text-slate-500 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <dt className="text-xs font-medium uppercase tracking-widest text-slate-400">{stat.label}</dt>
                <dd className="mt-3 text-2xl font-semibold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1080&auto=format&fit=crop"
              alt="Students exploring a new city"
              width={780}
              height={960}
              sizes="(min-width: 1024px) 480px, 90vw"
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">PERSONAL ADVISOR</p>
              <p className="mt-2 text-sm text-slate-600">
                留学の目的やキャリアに合わせたパーソナライズプランをご提案します。
              </p>
            </div>
          </div>
          <div className="absolute -left-4 -top-6 hidden h-24 w-24 rounded-full border border-brand-300/60 bg-brand-100/70 blur-0 lg:block" />
        </div>
      </div>
    </section>
  )
}
