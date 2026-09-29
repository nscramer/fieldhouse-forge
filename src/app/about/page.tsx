import type { Metadata } from "next";
import Image from "next/image";
import { QuoteCta } from "@/components/content/quote-cta";
export const metadata: Metadata = {
  title: "About Fieldhouse Forge",
  description:
    "The story and design principles behind Fieldhouse Forge of Hickory, Indiana.",
};
export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">An Indiana company from Hickory</span>
          <h1>Made for the Long Season.</h1>
          <p className="lede">
            Fieldhouse Forge is built around a simple idea: athletic equipment
            works best when the whole room is considered.
          </p>
        </div>
      </header>
      <section className="split">
        <div className="split-image">
          <Image
            src="/images/about/workshop-wide.webp"
            alt="Two fabricators welding athletic equipment frames in a Hickory workshop"
            fill
            sizes="(max-width: 800px) 100vw, 58vw"
          />
        </div>
        <div className="split-copy">
          <span className="eyebrow">The Hickory story</span>
          <h2>Practical by nature.</h2>
          <p>
            Fieldhouse Forge grew from the kinds of rooms every Indiana town
            recognizes: a maple floor, folded bleachers, banners overhead, and
            a weight room down the hall.
          </p>
          <p>
            We bring gymnasium systems, strength equipment, seating, padding,
            controls, and outdoor equipment into one coordinated project
            conversation.
          </p>
        </div>
      </section>
      <section className="section dark-band">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Our principles</span>
            <h2>
              Plan clearly.
              <br />
              Build honestly.
            </h2>
          </div>
          <div className="grid-2">
            {[
              [
                "Design",
                "Start with room use, sightlines, clearances, and changeover.",
              ],
              [
                "Fabrication",
                "Value understandable details and durable material choices.",
              ],
              [
                "Planning",
                "Keep the equipment package legible across disciplines.",
              ],
              [
                "Support",
                "Give owners useful documentation and qualified next steps.",
              ],
            ].map(([title, copy]) => (
              <article className="system-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="split">
        <div className="split-copy">
          <span className="eyebrow">Attention to the joint</span>
          <h2>Specific where it matters.</h2>
          <p className="lede">
            The visual story stays close to the materials—steel, maple, padding,
            and powder coat—because credible facilities are built from details,
            not slogans.
          </p>
        </div>
        <div className="split-image">
          <Image
            src="/images/about/detail-weld.webp"
            alt="Gloved fabricator welding a steel athletic equipment frame"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </section>
      <QuoteCta />
    </>
  );
}
