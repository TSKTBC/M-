import Image from "next/image"

const actions = [
  {
    title: "無料カウンセリングを予約",
    description: "専任カウンセラーがオンラインでヒアリング。留学目的やご希望に合わせたプランをご提案します。",
    href: "#contact",
    label: "カウンセリング予約",
  },
  {
    title: "資料請求",
    description: "提携校のパンフレットやBeyond独自のガイドブックをお届けします。",
    href: "mailto:concierge@beyond.example.com?subject=%E8%B3%87%E6%96%99%E8%AB%8B%E6%B1%82%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B",
    label: "資料を取り寄せる",
  },
  {
    title: "LINEで相談",
    description: "気になることを気軽にご相談いただけます。担当者が24時間以内にご返信します。",
    href: "https://line.me",
    label: "LINEでつながる",
  },
]

export default function CTASection() {
  return (
    <section id="cta" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-slate-900 p-10 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                一歩踏み出すための、3つのサポート
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                初めての留学でも安心してご相談いただけるよう、Beyondでは3つのコンタクトポイントをご用意しています。
                お客様の状況に合わせて、最適なサポートをお選びください。
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {actions.map((action) => (
                  <a
                    key={action.title}
                    href={action.href}
                    className="flex h-full flex-col justify-between rounded-2xl bg-white/10 p-6 text-white transition hover:bg-white/20"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{action.title}</h3>
                      <p className="mt-3 text-sm text-slate-200">{action.description}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                      {action.label}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="relative hidden h-full lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-brand-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=800&auto=format&fit=crop"
                    alt="Advisor meeting"
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 rounded-2xl bg-white/90 p-5 text-slate-900 shadow-lg">
                  <p className="text-sm font-semibold">Beyond Concierge</p>
                  <p className="mt-2 text-sm text-slate-600">
                    渡航前準備から現地サポートまで、専任コンシェルジュが丁寧にサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
