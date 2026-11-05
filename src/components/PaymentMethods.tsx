import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Oficjalne logotypy wrzuć do public/img/platnosci/:
 *  - blik.svg        (materiały dla akceptantów BLIK)
 *  - visa.svg        (Visa – acceptance mark)
 *  - mastercard.svg  (Mastercard – acceptance mark)
 * Dopóki plików nie ma, wyświetla się ilustracja zastępcza.
 */

function Logo({ src, alt, fallback, className }: { src: string; alt: string; fallback: ReactNode; className?: string }) {
  const ref = useRef<HTMLImageElement>(null)
  const [ok, setOk] = useState(true)
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setOk(false)
  }, [])
  if (!ok) return <>{fallback}</>
  return <img ref={ref} src={src} alt={alt} onError={() => setOk(false)} className={className} loading="lazy" />
}

const CashArt = () => (
  <svg viewBox="0 0 64 48" className="h-12 w-16" aria-hidden="true">
    <rect x="10" y="4" width="48" height="26" rx="4" fill="#7FAF86" transform="rotate(-8 34 17)" />
    <rect x="6" y="12" width="50" height="28" rx="4" fill="#9CC7A1" stroke="#6B8F3F" strokeWidth="1.5" />
    <circle cx="31" cy="26" r="7" fill="none" stroke="#fff" strokeWidth="2" />
    <text x="31" y="30" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="sans-serif">zł</text>
    <circle cx="13" cy="19" r="1.6" fill="#fff" />
    <circle cx="49" cy="33" r="1.6" fill="#fff" />
    <circle cx="52" cy="40" r="7" fill="#E2B865" stroke="#B88A2E" strokeWidth="1.5" />
    <circle cx="52" cy="40" r="3.5" fill="none" stroke="#B88A2E" strokeWidth="1" />
  </svg>
)

const CardArt = () => (
  <svg viewBox="0 0 64 44" className="h-11 w-16" aria-hidden="true">
    <rect x="2" y="2" width="60" height="40" rx="6" fill="#3F3D3D" />
    <rect x="2" y="10" width="60" height="7" fill="#585656" />
    <rect x="9" y="22" width="10" height="8" rx="1.5" fill="#E2B865" />
    <rect x="9" y="34" width="26" height="3" rx="1.5" fill="#9a9898" />
    <circle cx="45" cy="31" r="6" fill="#9CC7A1" opacity=".9" />
    <circle cx="52" cy="31" r="6" fill="#E2B865" opacity=".9" />
  </svg>
)

const PhoneArt = () => (
  <svg viewBox="0 0 44 56" className="h-12 w-10" aria-hidden="true">
    <rect x="6" y="2" width="32" height="52" rx="6" fill="#3F3D3D" />
    <rect x="9" y="8" width="26" height="38" rx="2" fill="#fff" />
    <text x="22" y="31" textAnchor="middle" fontSize="9" fontWeight="800" fill="#3F3D3D" fontFamily="sans-serif">6 cyfr</text>
    <circle cx="22" cy="50" r="2" fill="#9a9898" />
  </svg>
)

const tile =
  'flex h-[92px] w-[150px] items-center justify-center gap-3 rounded-2xl border border-[#ececec] bg-white px-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]'

export default function PaymentMethods() {
  return (
    <ul className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10">
      <li className="group flex flex-col items-center">
        <span className={tile}>
          <CashArt />
        </span>
        <span className="mt-3 text-sm font-semibold tracking-wider text-ink">Gotówka</span>
      </li>
      <li className="group flex flex-col items-center">
        <span className={tile}>
          <Logo
            src="/img/platnosci/visa.svg"
            alt="Visa"
            className="h-7 w-auto"
            fallback={<CardArt />}
          />
          <Logo src="/img/platnosci/mastercard.svg" alt="Mastercard" className="h-10 w-auto" fallback={null} />
        </span>
        <span className="mt-3 text-sm font-semibold tracking-wider text-ink">Karta płatnicza</span>
      </li>
      <li className="group flex flex-col items-center">
        <span className={tile}>
          <Logo src="/img/platnosci/blik.svg" alt="BLIK" className="h-10 w-auto" fallback={<PhoneArt />} />
        </span>
        <span className="mt-3 text-sm font-semibold tracking-wider text-ink">BLIK</span>
      </li>
    </ul>
  )
}
