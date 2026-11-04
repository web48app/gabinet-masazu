import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Nie znaleziono strony – Gabinet Masażu Karolina Orlik</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="mx-auto max-w-site px-4 py-32 text-center">
        <h1 className="font-display text-5xl text-ink">404</h1>
        <p className="mt-4">Ta strona nie istnieje lub została przeniesiona.</p>
        <Link to="/" className="btn-sage mt-8">Wróć na stronę główną</Link>
      </section>
    </>
  )
}
