const baseUrl = 'https://bifrostsolutions.dk'

export default function sitemap() {
  const routes = [
    ['', 'weekly', 1],
    ['/cases', 'monthly', 0.9],
    ['/cases/carupgrade', 'monthly', 0.8],
    ['/cases/lepas-dressage', 'monthly', 0.8],
    ['/hjemmeside-til-mindre-virksomhed', 'monthly', 0.9],
    ['/hjemmeside-paa-abonnement', 'monthly', 0.9],
    ['/hjemmeside-med-hosting-og-drift', 'monthly', 0.9],
    ['/privatlivspolitik', 'yearly', 0.3],
    ['/cookiepolitik', 'yearly', 0.3],
  ]

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
