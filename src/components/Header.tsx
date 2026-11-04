import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Phone, AtSign, Clock, Menu, X, Facebook, Instagram } from 'lucide-react'
import { site } from '../data/site'

const nav = [
  { to: '/', label: 'Strona główna' },
  { to: '/o-mnie', label: 'O mnie' },
  { to: '/cennik', label: 'Cennik' },
  { to: '/kontakt', label: 'Kontakt' },
]

function InfoItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="text-[#c9c6c6]">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-[#9a9898]">{label}</span>
        <span className="mt-1 text-[15px] font-bold text-body">{value}</span>
      </span>
    </>
  )
  const cls = 'flex items-center gap-4 px-8 first:pl-0 last:pr-0 border-l border-[#e6e6e6] first:border-l-0'
  return href ? (
    <a href={href} className={cls + ' hover:opacity-80 transition'}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="relative z-30 bg-white">
      <div className="mx-auto flex max-w-site items-center justify-between px-4 py-6 lg:py-8">
        <Link to="/" aria-label="Gabinet Masażu Karolina Orlik – strona główna" className="shrink-0">
          <img
            src="/img/logo-gabinet-karolina-orlik.png"
            alt="Logo – Gabinet Masażu i Gimnastyki Korekcyjnej Karolina Orlik"
            width={200}
            height={70}
            className="h-[56px] w-auto lg:h-[70px]"
          />
        </Link>

        <div className="hidden lg:flex">
          <InfoItem icon={<Phone size={30} strokeWidth={1.6} />} label="Telefon" value={site.phone} href={site.phoneHref} />
          <InfoItem icon={<AtSign size={30} strokeWidth={1.6} />} label="Email" value={site.email} href={`mailto:${site.email}`} />
          <InfoItem icon={<Clock size={30} strokeWidth={1.6} />} label="Godziny otwarcia" value={site.hoursShort} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md bg-sage text-white lg:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Desktop nav bar – overlaps the hero like the original */}
      <div className="absolute inset-x-0 top-full z-30 hidden -translate-y-[34px] lg:block">
        <nav aria-label="Menu główne" className="mx-auto flex max-w-site items-center justify-between rounded-md bg-sage px-[30px] shadow-sm">
          <ul className="flex gap-11">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end
                  className={({ isActive }) =>
                    'relative block py-[22px] text-[13px] font-extrabold uppercase tracking-wide text-white after:absolute after:inset-x-0 after:bottom-[14px] after:h-[3px] after:rounded after:bg-white/80 after:transition-transform after:origin-left ' +
                    (isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100')
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-stretch self-stretch">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram gabinetu" className="flex w-12 items-center justify-center border-l border-white/30 text-white hover:bg-white/10">
              <Instagram size={17} />
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook gabinetu" className="flex w-12 items-center justify-center border-l border-white/30 text-white hover:bg-white/10">
              <Facebook size={17} />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Menu mobilne" className="border-t border-sage/40 bg-sage lg:hidden">
          <ul className="px-4 py-2">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end className="block border-b border-white/20 py-3 text-sm font-extrabold uppercase tracking-wide text-white last:border-0">
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 px-4 pb-5 text-sm text-white">
            <a href={site.phoneHref} className="flex items-center gap-2 font-bold"><Phone size={16} /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2"><AtSign size={16} /> {site.email}</a>
            <span className="flex items-center gap-2"><Clock size={16} /> Pn–Pt 8:30–18:00, Sob 8:30–13:00</span>
          </div>
        </nav>
      )}
    </header>
  )
}
