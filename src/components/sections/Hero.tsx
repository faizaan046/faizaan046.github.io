import {
  ArrowRight,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const hasGithub = Boolean(personalInfo.github);
  const hasLinkedin = Boolean(personalInfo.linkedin);
  const hasTwitter = Boolean(personalInfo.twitter);

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-charminar-section"
      style={{
        paddingTop: "clamp(5rem, 12vw, 9rem)",
        paddingBottom: "clamp(4rem, 10vw, 7rem)",
      }}
    >
      <img src="/charminar-outline.svg" alt="" aria-hidden="true" className="hero-charminar-art" />
      <div className="container hero-charminar-content">
        {/* Eyebrow */}
        <p className="mono-label" style={{ marginBottom: "1.75rem" }}>
          Computer vision · Machine learning · Software engineering
        </p>

        {/* Headline */}
        <h1
          id="hero-title"
          className="text-hero"
          style={{ color: "var(--tx)", marginBottom: "1.75rem" }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--ac)" }}>{personalInfo.firstName}</span>.
        </h1>

        {/* Introduction */}
        <div
          style={{
            maxWidth: "640px",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.65,
              color: "var(--t2)",
              marginBottom: "0.875rem",
            }}
          >
            {personalInfo.heroParagraph1}
          </p>
          <p
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
              lineHeight: 1.65,
              color: "var(--t2)",
            }}
          >
            {personalInfo.heroParagraph2}
          </p>
        </div>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <a href="#work" className="btn-primary" id="hero-selected-work">
            Projects.
            <ArrowRight size={15} aria-hidden="true" />
          </a>


          {hasGithub ? (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub profile"
              id="hero-github"
            >
            <GithubIcon size={16} aria-hidden="true" />
            </a>
          ) : null}

          {hasTwitter ? (
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="Twitter/X profile"
              id="hero-twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1.9 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.8L7.4 3.9H5.5L17.8 20Z"/>
              </svg>
            </a>
          ) : null}

          {hasLinkedin ? (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn profile"
              id="hero-linkedin"
            >
            <LinkedinIcon size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {/* Location + institution */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--t2)",
          }}
        >
          <MapPin size={14} aria-hidden="true" />
          <span
            style={{
              fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
              fontSize: "0.8125rem",
              letterSpacing: "0.03em",
            }}
          >
            {personalInfo.location ? `${personalInfo.location}  ·  ` : ""}
            {personalInfo.institution}
          </span>
        </div>
      </div>
      <style>{`
        .hero-charminar-section { position: relative; overflow: hidden; }
        .hero-charminar-content { position: relative; z-index: 1; }
        .hero-charminar-art { display: none; pointer-events: none; }
        @media (min-width: 1024px) {
          .hero-charminar-art {
            display: block;
            position: absolute;
            right: -175px;
            bottom: 0;
            width: 350px;
            height: auto;
            opacity: 0.32;
            z-index: 0;
          }
        }
      `}</style>
    </section>
  );
}
