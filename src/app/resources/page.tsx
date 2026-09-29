import type { Metadata } from "next";
import { QuoteCta } from "@/components/content/quote-cta";
import { resourceDisclaimer, resources } from "@/content/resources";
export const metadata: Metadata = {
  title: "Planning Resources",
  description:
    "Planning and coordination resources for Fieldhouse Forge athletic equipment projects.",
};
export default function ResourcesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">For early conversations</span>
          <h1>Planning Resources</h1>
          <p className="lede">
            Practical material for early planning, specification coordination,
            and owner conversations.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="notice" style={{ marginBottom: "2rem" }}>
            <strong>Important:</strong> {resourceDisclaimer}
          </div>
          <div className="grid-3">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.title}>
                <span className="demo-tag">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <ul>
                  {resource.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="download-link" href={resource.href} download>
                  Download {resource.fileType} ↓
                </a>
                <p className="muted">
                  <small>{resourceDisclaimer}</small>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteCta title="Need help organizing a facility package?" />
    </>
  );
}
