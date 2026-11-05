export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-[#e7e7e7] border-y border-[#e7e7e7]">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-bold text-ink">
            <h3>{f.q}</h3>
            <span className="text-2xl text-sage transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
