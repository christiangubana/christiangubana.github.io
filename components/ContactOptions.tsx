import { useState } from "react";
import { profile } from "../portfolio";
import { MailIcon } from "./Icons";

// mailto: only works when the visitor has a mail app set up, so we also
// offer webmail links and a copy button.
const subject = "Project enquiry";
const body = "Hi Christian,\n\nWhat I'm building:\nWhere it's stuck:\nTimeline:\n";

const enc = encodeURIComponent;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${enc(subject)}&body=${enc(body)}`;
const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${profile.email}&subject=${enc(subject)}&body=${enc(body)}`;
const mailto = `mailto:${profile.email}?subject=${enc(subject)}&body=${enc(body)}`;

export default function ContactOptions() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Older browsers: select the address so it can be copied manually.
      const el = document.getElementById("contact-email");
      if (el) window.getSelection()?.selectAllChildren(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-options">
      <div className="email-row">
        <MailIcon />
        <span id="contact-email">{profile.email}</span>
        <button type="button" className="btn btn-small btn-invert" onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="actions">
        <a href={gmail} className="btn btn-invert" target="_blank" rel="noopener noreferrer">
          Open in Gmail
        </a>
        <a href={outlook} className="btn btn-ghost-invert" target="_blank" rel="noopener noreferrer">
          Open in Outlook
        </a>
        <a href={mailto} className="btn btn-ghost-invert">
          Use my mail app
        </a>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </p>
    </div>
  );
}
