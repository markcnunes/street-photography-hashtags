const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml.gz',
    '!googlec170c76d3334398b.html'
  ]
})
