import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "../../components/SEO";
import { MailIcon } from "../../components/Icons";
import { getAllPosts, getPost } from "../../lib/posts";
import { formatDate } from "../../lib/format";
import { Post } from "../../types/sections";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <>
      <SEO title={post.title} description={post.description} path={`/blog/${post.slug}/`} type="article" />
      <article className="section container narrow">
        <Link href="/blog" className="back-link">
          ← All posts
        </Link>
        <header className="post-head">
          <p className="meta">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
          <h1 className="h-page">{post.title}</h1>
          {post.tags.length > 0 && (
            <ul className="tags">
              {post.tags.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <aside className="post-cta">
          <p>
            <strong>Building something similar?</strong> I take on contract and project work for founders, agencies
            and businesses.
          </p>
          <Link href="/#contact" className="btn">
            <MailIcon /> Get in touch
          </Link>
        </aside>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map(p => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { post: getPost(params!.slug as string) },
});
