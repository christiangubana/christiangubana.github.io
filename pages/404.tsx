import Link from "next/link";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="section container narrow">
        <h1 className="h-page">Page not found</h1>
        <p className="lead">That page doesn&apos;t exist, or it has moved.</p>
        <Link href="/" className="btn">
          Back to home
        </Link>
      </section>
    </>
  );
}
