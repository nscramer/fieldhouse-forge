import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/content/quote-cta";
import { projects } from "@/content/projects";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Athletic-facility project studies featuring coordinated Fieldhouse Forge equipment systems.",
};
export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Selected portfolio</span>
          <h1>Project Studies</h1>
          <p className="lede">
            Three facilities show how equipment choices can be coordinated as
            part of a room, not a shopping list.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "4rem" }}>
          {projects.map((project, i) => (
            <article className="split project-card" key={project.slug}>
              <div className="split-image" style={{ order: i % 2 ? 2 : 1 }}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 58vw"
                />
              </div>
              <div className="split-copy" style={{ order: i % 2 ? 1 : 2 }}>
                <span className="demo-tag">{project.facility}</span>
                <h2>{project.name}</h2>
                <strong>Situation</strong>
                <p>{project.situation}</p>
                <strong>Scope</strong>
                <p>{project.scope}</p>
                <strong>Supplied systems</strong>
                <ul>
                  {project.systems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <strong>Design notes</strong>
                <p>{project.designNotes}</p>
                <Link className="button" href="/request-quote">
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
