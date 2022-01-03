import React from 'react'
import Head from 'next/head'

export default function SEO({
  description = 'Dedicated to promoting ambitious musical talents to a larger audience across the world.',
  author = '@orras_ent',
  country = 'NG',
  url = 'https://orras.com/',
  meta,
  title = 'Orras.com - Make The World Listen',
  keywords = 'Orras Entertainment, music label, record label',
  site_name = 'orras.com',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `keywords`,
      content: keywords,
    },
    {
      property: `og:site_name`,
      content: site_name,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: url,
    },
    {
      name: `og:image`,
      content:
        'https://ik.imagekit.io/mc9kkmqw98g/Orras/meta-bg_yVTP1-1l_Km.png?updatedAt=1641199040893&tr=w-1200,h-628,fo-auto',
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:url`,
      content: url,
    },
    {
      name: `twitter:title`,
      content: site_name,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:app:country`,
      content: country,
    },
    {
      name: `twitter:image`,
      content:
        'https://ik.imagekit.io/mc9kkmqw98g/Orras/meta-bg_yVTP1-1l_Km.png?updatedAt=1641199040893&tr=w-1200,h-628,fo-auto',
    },
  ].concat(meta)

  return (
    <Head>
      <title>{title}</title>

      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}
