const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public'
  },
  publicExcludes: ['!robots.txt', '!sitemap.xml.gz', '!google*.html']
})
