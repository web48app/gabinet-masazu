import { Helmet } from 'react-helmet-async'
import { SITE_URL, site } from '../data/site'

type Props = {
  title: string
  description: string
  path: string
  image?: string
  jsonLd?: object[]
}

export default function Seo({ title, description, path, image = '/img/og-gabinet-karolina-orlik.jpg', jsonLd = [] }: Props) {
  const url = SITE_URL + (path === '/' ? '/' : path)
  const img = SITE_URL + image
  return (
    <Helmet prioritizeSeoTags>
      <html lang="pl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="author" content={site.owner} />
      <meta name="geo.region" content="PL-12" />
      <meta name="geo.placename" content="Tarnów" />
      <meta name="geo.position" content={`${site.geo.lat};${site.geo.lng}`} />
      <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content={site.shortName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Gabinet masażu Karolina Orlik w Tarnowie" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(d)}
        </script>
      ))}
    </Helmet>
  )
}
