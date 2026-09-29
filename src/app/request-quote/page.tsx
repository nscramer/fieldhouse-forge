import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
export const metadata: Metadata = {
  title: "Request a Quote Demo",
  description:
    "Try the local-only fictional Fieldhouse Forge project inquiry flow. No data is sent or stored.",
};
export default async function RequestQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow">Project inquiry demonstration</span>
          <h1>Tell Us About the Room.</h1>
          <p className="lede">
            A credible equipment package starts with facility use, project
            context, and the systems that need to work together.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="container form-shell">
          <aside>
            <div className="notice">
              <strong>This is a private, local-only demo.</strong>
              <p>
                Anything you type stays in this browser tab and is discarded
                when you leave or refresh. The form does not transmit, store,
                log, email, or otherwise retain your information.
              </p>
            </div>
            <h2 style={{ marginTop: "2rem" }}>What this brief covers</h2>
            <ul className="meta-list">
              <li>Who is involved</li>
              <li>What kind of facility is planned</li>
              <li>Which equipment families matter</li>
              <li>Where the project stands today</li>
            </ul>
          </aside>
          <QuoteForm initialCategory={category} />
        </div>
      </section>
    </>
  );
}
