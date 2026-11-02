import { profile } from "../portfolio";

// Opens a pre-filled draft in the visitor's webmail.
const subject = "Project enquiry";
const body = "Hi Christian,\n\nWhat I'm building:\nWhere it's stuck:\nTimeline:\n";

const enc = encodeURIComponent;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${enc(subject)}&body=${enc(body)}`;
const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${profile.email}&subject=${enc(subject)}&body=${enc(body)}`;

export default function ContactOptions() {
  return (
    <div className="actions contact-actions">
      <a href={gmail} className="btn btn-invert" target="_blank" rel="noopener noreferrer">
        Email me via Gmail
      </a>
      <a href={outlook} className="btn btn-ghost-invert" target="_blank" rel="noopener noreferrer">
        Email me via Outlook
      </a>
    </div>
  );
}
