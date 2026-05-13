export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portal/', '/login/', '/logged-out/', '/api/'],
    },
    sitemap: 'https://castilloandco.net/sitemap.xml',
  };
}
