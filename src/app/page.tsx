import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/content/product-grid";
import { QuoteCta } from "@/components/content/quote-cta";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/shared/home-hero.webp"
          alt="Warm, empty fieldhouse with basketball systems, padding, bleachers, and maple court"
          fill
          priority
          sizes="100vw"
        />
        <div className="container hero-content">
          <span className="eyebrow">Hickory, Indiana</span>
          <h1>Built Where Teams Are Made.</h1>
          <p className="lede">
            Athletic equipment and facility systems for the court, the weight
            room, the stands, and everything beyond the doors.
          </p>
          <div className="actions">
            <Link className="button button-light" href="/products">
              Browse Equipment
            </Link>
            <Link className="button" href="/request-quote">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Outfit the entire fieldhouse</span>
          <div
            className="grid-2"
            style={{ alignItems: "end", marginBottom: "2.5rem" }}
          >
            <h2>
              One facility.
              <br />
              Every system.
            </h2>
            <p className="lede">
              Fieldhouse Forge brings the moving parts of an athletic facility
              into one practical planning conversation.
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>
      <section className="section dark-band">
        <div className="container">
          <span className="eyebrow">From floor plan to final whistle</span>
          <h2>Four parts of a good handoff.</h2>
          <div className="process">
            {[
              [
                "01",
                "Plan",
                "Start with activities, room use, and the way the facility changes through the day.",
              ],
              [
                "02",
                "Specify",
                "Coordinate systems, finishes, support concepts, and control locations.",
              ],
              [
                "03",
                "Build",
                "Keep equipment packages legible for the team responsible for delivery.",
              ],
              [
                "04",
                "Support",
                "Give owners a clear inventory and a path to qualified ongoing care.",
              ],
            ].map(([number, title, copy]) => (
              <div className="process-item" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Selected project studies</span>
          <h2>Rooms made for the long season.</h2>
          <div className="grid-3">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={750}
                />
                <div className="project-body">
                  <span className="demo-tag">{project.facility}</span>
                  <h3>{project.name}</h3>
                  <p>{project.situation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="split dark-band">
        <div className="split-image">
          <Image
            src="/images/about/workshop-wide.webp"
            alt="Two fabricators welding athletic equipment frames in a Hickory workshop"
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
          />
        </div>
        <div className="split-copy">
          <span className="eyebrow">Designed in Hickory</span>
          <h2>Useful details. Durable thinking.</h2>
          <p className="lede">
            The best equipment plan is the one that still makes sense to the
            architect, installer, coach, and facility team.
          </p>
          <Link href="/about">About Fieldhouse Forge →</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Built around your role</span>
          <div className="grid-3">
            <div className="pathway">
              <h3>Architects & Specifiers</h3>
              <p>
                Explore product families and project planning resources.
              </p>
              <Link href="/resources">Visit resources →</Link>
            </div>
            <div className="pathway">
              <h3>Schools & Facilities</h3>
              <p>
                See how court, seating, training, and field systems fit
                together.
              </p>
              <Link href="/projects">Explore projects →</Link>
            </div>
            <div className="pathway">
              <h3>Dealers & Installers</h3>
              <p>
                Start with project scope, location, and the systems in the
                package.
              </p>
              <Link href="/request-quote">Start an inquiry →</Link>
            </div>
          </div>
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
