export default function sitemap() {
  const baseUrl = 'https://castilloandco.net';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
