import Link from "next/link";
import SEO from "../../components/SEO";
import { getAllPosts } from "../../lib/posts";
import { formatDate } from "../../lib/format";
import { PostMeta } from "../../types/sections";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <SEO
        title="Blog"
        description="Practical notes on building and shipping production software: multi-tenant SaaS, payments, NestJS, Next.js and PostgreSQL."
        path="/blog/"
      />
      <section className="section container narrow">
        <header className="section-head">
          <p className="kicker">Blog</p>
          <h1 className="h-page">Notes from production</h1>
          <p className="lead">
            Practical write-ups from the systems I build: multi-tenant SaaS, payments, and the parts of shipping
            software that tutorials skip.
          </p>
        </header>
        <ul className="post-list">
          {posts.map(p => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                <p className="meta">
                  {formatDate(p.date)} · {p.readingMinutes} min read
                </p>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
