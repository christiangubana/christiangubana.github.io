import Link from "next/link";
import SEO from "../components/SEO";
import ContactOptions from "../components/ContactOptions";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { getAllPosts } from "../lib/posts";
import { formatDate } from "../lib/format";
import {
  contactCopy,
  earlierWork,
  engagements,
  experience,
  feedbacks,
  hero,
  processSteps,
  profile,
  services,
  socialLinks,
  work,
} from "../portfolio";
import { PostMeta } from "../types/sections";

const external = { target: "_blank", rel: "noopener noreferrer" };

export default function Home({ posts }: { posts: PostMeta[] }) {
  const [featured, ...rest] = work;

  return (
    <>
      <SEO />

      {/* Hero */}
      <section className="hero container">
        <div className="hero-text">
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="actions">
            <a href="#contact" className="btn">
              <MailIcon /> Tell me what you&apos;re building
            </a>
            <a href="#work" className="btn btn-ghost">
              See production work
            </a>
          </div>
          <p className="eyebrow">{hero.eyebrow}</p>
        </div>
        <figure className="profile">
          <img className="avatar" src={profile.avatar} alt={profile.name} width={168} height={168} />
          <figcaption>
            <span className="status">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </span>
            <span className="location">{profile.location}</span>
          </figcaption>
        </figure>
      </section>

      {/* Proof strip */}
      <section className="proof container" aria-label="Live products">
        <span className="proof-label">Live in production</span>
        <ul>
          {work.map(w => (
            <li key={w.name}>
              <a href={w.link} {...external}>
                {w.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" className="section container">
        <header className="section-head">
          <p className="kicker">Selected work</p>
          <h2>Production platforms, not tutorials</h2>
        </header>

        <article className="card card-featured">
          <div className="card-featured-main">
            <p className="meta">
              {featured.role}
              {featured.period && ` · ${featured.period}`}
            </p>
            <h3>{featured.name}</h3>
            <p className="summary">{featured.summary}</p>
            <p>{featured.desc}</p>
            {featured.link && (
              <a className="text-link" href={featured.link} {...external}>
                Visit {featured.name} <ArrowIcon />
              </a>
            )}
          </div>
          <div className="card-featured-side">
            {featured.highlights && (
              <ul className="checks">
                {featured.highlights.map(h => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <Tags items={featured.stack} />
          </div>
        </article>

        <div className="grid grid-2">
          {rest.map(w => (
            <article className="card" key={w.name}>
              <p className="meta">
                {w.role}
                {w.period && ` · ${w.period}`}
              </p>
              <h3>{w.name}</h3>
              <p className="summary">{w.summary}</p>
              <p>{w.desc}</p>
              <div className="card-foot">
                <Tags items={w.stack} />
                {w.link && (
                  <a className="text-link" href={w.link} {...external}>
                    {w.linkLabel || "Visit site"} <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="earlier">
          <h3 className="h-small">Earlier work</h3>
          <ul>
            {earlierWork.map(e => (
              <li key={e.name}>
                <a href={e.link} {...external}>
                  {e.name}
                </a>{" "}
                <span>{e.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section section-alt">
        <div className="container">
          <header className="section-head">
            <p className="kicker">How I can help</p>
            <h2>Where I&apos;m most useful</h2>
          </header>
          <div className="grid grid-2">
            {services.map(s => (
              <article className="card" key={s.title}>
                <p className="meta">{s.forWho}</p>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="checks">
                  {s.examples.map(e => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section container">
        <header className="section-head">
          <p className="kicker">Working together</p>
          <h2>How an engagement runs</h2>
        </header>
        <ol className="steps">
          {processSteps.map((p, i) => (
            <li key={p.title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ol>
        <div className="engagements">
          {engagements.map(e => (
            <div key={e.title}>
              <h3 className="h-small">{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      {posts.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <header className="section-head section-head-row">
              <div>
                <p className="kicker">Articles</p>
                <h2>Notes from production</h2>
              </div>
              <Link href="/articles" className="text-link">
                All articles <ArrowIcon />
              </Link>
            </header>
            <div className="grid grid-3">
              {posts.slice(0, 3).map(p => (
                <Link href={`/articles/${p.slug}`} className="card card-link" key={p.slug}>
                  <p className="meta">
                    {formatDate(p.date)} · {p.readingMinutes} min read
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      <section id="experience" className="section container">
        <header className="section-head section-head-row">
          <div>
            <p className="kicker">Background</p>
            <h2>Experience</h2>
          </div>
          <a href={profile.resumeLink} className="text-link" {...external}>
            Full CV (PDF) <ArrowIcon />
          </a>
        </header>
        <ol className="timeline">
          {experience.map(e => (
            <li key={`${e.company}-${e.role}`}>
              <p className="meta">{e.date}</p>
              <div>
                <h3>
                  {e.role} <span className="muted">· {e.company}</span>
                </h3>
                <p>{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="quotes">
          {feedbacks.map(f => (
            <figure key={f.name}>
              <blockquote>&ldquo;{f.feedback}&rdquo;</blockquote>
              <figcaption>
                <strong>{f.name}</strong> · {f.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="cta">
            <h2>{contactCopy.title}</h2>
            <p>{contactCopy.desc}</p>
            <ContactOptions />
            <p className="cta-alt">
              Prefer LinkedIn?{" "}
              <a href={socialLinks.linkedin} {...external}>
                <LinkedInIcon /> Message me there
              </a>{" "}
              ·{" "}
              <a href={socialLinks.github} {...external}>
                <GitHubIcon /> GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Tags({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="tags">
      {items.map(t => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}
