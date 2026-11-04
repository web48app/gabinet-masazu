import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="relative h-[120px] overflow-hidden bg-mist" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[300px] w-[70%] -translate-x-1/2 -translate-y-[60%] rounded-[50%] bg-white" />
      </div>

      <div className="flex justify-center gap-5 py-5">
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf text-ink transition hover:bg-leaf hover:text-white">
          <Facebook size={15} />
        </a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-leaf text-ink transition hover:bg-leaf hover:text-white">
          <Instagram size={15} />
        </a>
      </div>

      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        <div>
          <h3 className="mb-4 text-base font-bold text-ink">Kontakt</h3>
          <p className="text-sm"><a href={site.phoneHref} className="hover:text-leaf">{site.phone}</a></p>
          <p className="mt-3 text-sm"><a href={`mailto:${site.email}`} className="hover:text-leaf">{site.email}</a></p>
        </div>
        <address className="not-italic">
          <h3 className="mb-4 text-base font-bold text-ink">Adres</h3>
          <p className="text-sm">{site.postal} {site.city}</p>
          <p className="mt-3 text-sm">{site.street}</p>
        </address>
        <div>
          <h3 className="mb-4 text-base font-bold text-ink">Godziny</h3>
          <p className="text-sm">Pn–Pt: 8:30 – 18:00</p>
          <p className="mt-3 text-sm">Sobota: 8:30 - 13:00</p>
        </div>
        <div>
          <a href={site.phoneHref} className="btn-sage">Umów wizytę</a>
        </div>
      </div>

      <nav aria-label="Menu w stopce" className="mx-auto flex max-w-site flex-wrap justify-center gap-x-6 gap-y-2 px-4 pb-4 text-xs">
        <Link to="/" className="hover:text-leaf">Strona główna</Link>
        <Link to="/o-mnie" className="hover:text-leaf">O mnie</Link>
        <Link to="/cennik" className="hover:text-leaf">Cennik</Link>
        <Link to="/kontakt" className="hover:text-leaf">Kontakt</Link>
      </nav>
      <p className="pb-10 text-center text-xs text-[#888]">© {new Date().getFullYear()} {site.shortName} · Masaż leczniczy Tarnów</p>
    </footer>
  )
}
