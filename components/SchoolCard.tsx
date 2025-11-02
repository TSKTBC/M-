import Image from "next/image"
import Link from "next/link"
import type {SchoolCardFragment} from "@/lib/queries"
import {urlFor} from "@/lib/sanity.image"

export default function SchoolCard({school}: {school: SchoolCardFragment}) {
  const location = [school.country, school.city].filter(Boolean).join(" / ")

  return (
    <Link
      href={`/schools/${school.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] bg-slate-100">
        {school.mainImage ? (
          <Image
            src={urlFor(school.mainImage).width(800).height(500).fit("crop").url()}
            alt={school.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">No Image</div>
        )}
        {school.isFeatured ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-900">{school.title}</h3>
          {school.tuition ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {school.tuition.toLocaleString()}円〜
            </span>
          ) : null}
        </div>
        {location ? <p className="mt-2 text-sm text-slate-500">{location}</p> : null}
        {school.features && school.features.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {school.features.slice(0, 3).map((feature) => (
              <li key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
        {school.duration ? (
          <p className="mt-auto pt-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{school.duration}</p>
        ) : null}
      </div>
    </Link>
  )
}
