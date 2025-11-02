import type {Metadata} from "next"
import type {ReactNode} from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Beyond Study Abroad",
  description: "世界を舞台に学ぶためのプレミアムな留学支援サービス",
  metadataBase: new URL("https://beyond.example.com"),
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50">
        <div className="relative flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
              <a href="/" className="text-xl font-semibold tracking-tight text-slate-900">
                Beyond
              </a>
              <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                <a href="/schools" className="transition hover:text-slate-900">
                  学校一覧
                </a>
                <a href="#cta" className="transition hover:text-slate-900">
                  資料請求
                </a>
                <a href="#contact" className="transition hover:text-slate-900">
                  お問い合わせ
                </a>
              </nav>
              <a
                href="#cta"
                className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 md:inline-flex"
              >
                無料カウンセリング
              </a>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden">
                <span className="sr-only">メニュー</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5" />
                </svg>
              </button>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; {new Date().getFullYear()} Beyond. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-slate-900">
                  プライバシーポリシー
                </a>
                <a href="/terms" className="hover:text-slate-900">
                  利用規約
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
