import Link from "next/link";
import { ReactNode } from "react";
import { profile, socialLinks } from "../portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="container nav" aria-label="Main">
          <Link href="/" className="brand">
            {profile.name}
          </Link>
          <div className="nav-links">
            <Link href="/#work" className="nav-secondary">
              Work
            </Link>
            <Link href="/#services" className="nav-secondary">
              Services
            </Link>
            <Link href="/#process" className="nav-secondary">
              Process
            </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact" className="btn btn-small">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <div className="footer-links">
            <Link href="/#contact">
              <MailIcon /> Email
            </Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
