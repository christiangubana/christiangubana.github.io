import React from "react";
import Head from "next/head";
import { seoData } from "../portfolio";

function SEO() {
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoData.url} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      <meta name="twitter:creator" content="@christiangubana" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Professional Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: seoData.author,
            url: seoData.url,
            image: seoData.image,
            jobTitle: "Full-Stack Software Engineer",
            description: seoData.description,
            sameAs: [
              "https://github.com/christiangubana",
              "https://linkedin.com/in/christiangubana",
              "https://twitter.com/christiangubana",
            ],
            knowsAbout: [
              "React",
              "Node.js",
              "TypeScript",
              "JavaScript",
              "Next.js",
              "Full-Stack Development",
              "Web Development",
              "Software Engineering",
            ],
          }),
        }}
      />

      <link rel="manifest" href="/manifest.json" />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Head>
  );
}

// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };

export default SEO;
