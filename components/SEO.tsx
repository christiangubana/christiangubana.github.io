import Head from "next/head";
import { seoData, socialLinks } from "../portfolio";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

export default function SEO({ title, description, path = "", type = "website" }: Props) {
  const pageTitle = title ? `${title} | ${seoData.author}` : seoData.title;
  const desc = description || seoData.description;
  const url = `${seoData.url.replace(/\/$/, "")}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={desc} />
      <meta name="author" content={seoData.author} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.author} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={seoData.image} />

      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {type === "website" && !path && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: seoData.author,
              url: seoData.url,
              image: seoData.image,
              jobTitle: "Full-stack product engineer",
              description: seoData.description,
              sameAs: [socialLinks.github, socialLinks.linkedin],
              knowsAbout: ["TypeScript", "NestJS", "Next.js", "React", "PostgreSQL", "Prisma", "Multi-tenant SaaS"],
            }),
          }}
        />
      )}
    </Head>
  );
}
