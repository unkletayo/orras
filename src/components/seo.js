import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Dedicated to promoting ambitious musical talents to a larger audience across the world.',
  author = '@orras_ent',
  country="NG",
  meta,
  title = 'Orras Enterntainment Website',
  keywords= "Orras Entertainment, music label, record label",
  site_name="orras.com"
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `keywords`,
      content: description,
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
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
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
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>

      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
