import React from 'react'

export default function CoverBlockServer({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <div className="relative flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
      </div>
    </div>
  )
}
