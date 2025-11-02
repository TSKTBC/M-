"use client"

import Image from "next/image"
import {urlFor} from "@/lib/sanity.image"

export default function SchoolCard({school}: {school: any}) {
  return (
    <a
      href={`/schools/${school.slug}`}
      className="bg-white rounded-2xl border hover:shadow-md transition overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[16/9] bg-slate-100">
        {school.mainImage ? (
          <Image
            src={urlFor(school.mainImage).width(800).height(450).url()}
            alt={school.title}
            fill
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="p-4 flex-1 flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{school.title}</h2>
        <p className="text-sm text-gray-500">
          {school.country ? school.country.toUpperCase() : ""}
          {school.city ? ` / ${school.city}` : ""}
        </p>
        {school.tuition ? (
          <p className="text-sm mt-2">
            目安学費: <span className="font-medium">{school.tuition.toLocaleString()}円〜</span>
          </p>
        ) : null}
      </div>
    </a>
  )
}
