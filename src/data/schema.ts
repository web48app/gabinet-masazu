import { SITE_URL, site, hours, prices, faq, serviceDetails, pricesFor } from './site'

const BUSINESS_ID = SITE_URL + '/#gabinet'
const PERSON_ID = SITE_URL + '/#karolina-orlik'

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'MedicalBusiness'],
  '@id': BUSINESS_ID,
  name: site.name,
  alternateName: ['Gabinet Masażu Karolina Orlik', 'Masaż Tarnów Karolina Orlik'],
  description:
    'Gabinet masażu leczniczego, terapii manualnej i gimnastyki korekcyjnej w Tarnowie. Masaż leczniczy, klasyczny, relaksacyjny, sportowy, drenaż limfatyczny, Kobido, Hot Stone.',
  url: SITE_URL + '/',
  logo: SITE_URL + '/img/logo-gabinet-karolina-orlik.png',
  image: [
    SITE_URL + '/img/gabinet-masazu-tarnow-hero.jpg',
    SITE_URL + '/img/gabinet-masazu-tarnow-wnetrze.jpg',
    SITE_URL + '/img/karolina-orlik-masazystka-tarnow.jpg',
  ],
  telephone: '+48888804777',
  email: site.email,
  priceRange: '50–200 zł',
  currenciesAccepted: 'PLN',
  paymentAccepted: 'Gotówka, karta płatnicza, BLIK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ochronek 34',
    postalCode: site.postal,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: 'PL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  areaServed: [
    { '@type': 'City', name: 'Tarnów' },
    { '@type': 'AdministrativeArea', name: 'Powiat tarnowski' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.filter((h) => h.open && h.code !== 'Saturday').map((h) => h.code),
      opens: '08:30',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:30', closes: '13:00' },
  ],
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  sameAs: [site.facebook, site.instagram],
  knowsAbout: [
    'masaż leczniczy',
    'terapia manualna',
    'gimnastyka korekcyjna',
    'drenaż limfatyczny',
    'masaż Kobido',
    'masaż sportowy',
    'kinezyterapia',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cennik zabiegów',
    itemListElement: prices.map((p) => ({
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'PLN',
      itemOffered: {
        '@type': 'Service',
        name: `${p.name} (${p.time} min)`,
        serviceType: p.name,
        provider: { '@id': BUSINESS_ID },
        areaServed: 'Tarnów',
      },
    })),
  },
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.owner,
  jobTitle: 'Dyplomowany technik masażysta, instruktor gimnastyki korekcyjnej',
  image: SITE_URL + '/img/karolina-orlik-masazystka-tarnow.jpg',
  worksFor: { '@id': BUSINESS_ID },
  url: SITE_URL + '/o-mnie',
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Dyplom technika masażysty' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Instruktor gimnastyki korekcyjnej' },
  ],
  sameAs: [site.facebook, site.instagram],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_URL + '/#website',
  url: SITE_URL + '/',
  name: site.shortName,
  inLanguage: 'pl-PL',
  publisher: { '@id': BUSINESS_ID },
}

export const makeFaqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const faqSchema = makeFaqSchema(faq)

export const servicesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zabiegi w gabinecie masażu Karolina Orlik – Tarnów',
  itemListElement: serviceDetails.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      '@id': SITE_URL + '/cennik#' + s.slug,
      name: s.name,
      description: s.short,
      serviceType: s.name,
      areaServed: { '@type': 'City', name: 'Tarnów' },
      provider: { '@id': BUSINESS_ID },
      offers: pricesFor(s.name).map((p) => ({ '@type': 'Offer', price: p.price, priceCurrency: 'PLN', description: p.time + ' min' })),
    },
  })),
}

export const breadcrumb = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name, item: SITE_URL + path },
  ],
})
