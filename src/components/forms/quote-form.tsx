"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { products } from "@/content/products";

type Errors = Partial<
  Record<
    | "name"
    | "email"
    | "organization"
    | "role"
    | "projectType"
    | "location"
    | "timeline"
    | "interests",
    string
  >
>;

export function QuoteForm({ initialCategory }: { initialCategory?: string }) {
  const validInitial = products.some(({ slug }) => slug === initialCategory)
    ? initialCategory
    : undefined;
  const [selected, setSelected] = useState<string[]>(
    validInitial ? [validInitial] : [],
  );
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("name") || "").trim()) next.name = "Enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter an email in the format name@example.com.";
    if (!String(data.get("organization") || "").trim())
      next.organization = "Enter an organization.";
    if (!data.get("role")) next.role = "Select your role.";
    if (!data.get("projectType")) next.projectType = "Select a project type.";
    if (!String(data.get("location") || "").trim())
      next.location = "Enter the project location.";
    if (!data.get("timeline")) next.timeline = "Select a timeline.";
    if (!selected.length)
      next.interests = "Select at least one equipment interest.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(event.currentTarget);
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function startOver() {
    setSubmitted(false);
    setErrors({});
    setSelected(validInitial ? [validInitial] : []);
  }
  if (submitted)
    return (
      <div className="success" role="status">
        <span className="eyebrow">Project brief ready</span>
        <h2>Your project information is organized.</h2>
        <p className="lede">
          Review these details with a Fieldhouse Forge project specialist to
          begin a product and coordination conversation.
        </p>
        <button className="button" type="button" onClick={startOver}>
          Start Over
        </button>
      </div>
    );

  const fieldError = (name: keyof Errors) =>
    errors[name] ? (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  const invalid = (name: keyof Errors) => Boolean(errors[name]);
  return (
    <form className="quote-form" noValidate onSubmit={handleSubmit}>
      {Object.keys(errors).length > 0 && (
        <div
          className="error-summary"
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
        >
          <h2>There’s a little more to add.</h2>
          <p>Review the highlighted fields below:</p>
          <ul>
            {Object.entries(errors).map(([name, message]) => (
              <li key={name}>
                <a href={`#${name}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <fieldset>
        <legend>Contact</legend>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="name">Contact name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              aria-invalid={invalid("name")}
              aria-describedby={invalid("name") ? "name-error" : undefined}
            />
            {fieldError("name")}
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={invalid("email")}
              aria-describedby={invalid("email") ? "email-error" : undefined}
            />
            {fieldError("email")}
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone <span className="muted">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Organization</legend>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="organization">Organization</label>
            <input
              id="organization"
              name="organization"
              autoComplete="organization"
              aria-invalid={invalid("organization")}
              aria-describedby={
                invalid("organization") ? "organization-error" : undefined
              }
            />
            {fieldError("organization")}
          </div>
          <div className="field">
            <label htmlFor="role">Your role</label>
            <select
              id="role"
              name="role"
              defaultValue=""
              aria-invalid={invalid("role")}
              aria-describedby={invalid("role") ? "role-error" : undefined}
            >
              <option value="" disabled>
                Select a role
              </option>
              <option>Architect or specifier</option>
              <option>School or facility leader</option>
              <option>Public-sector buyer</option>
              <option>Dealer or installer</option>
              <option>Other project partner</option>
            </select>
            {fieldError("role")}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Project</legend>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="projectType">Project type</label>
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              aria-invalid={invalid("projectType")}
              aria-describedby={
                invalid("projectType") ? "projectType-error" : undefined
              }
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option>New construction</option>
              <option>Renovation</option>
              <option>Equipment replacement</option>
              <option>Early planning</option>
            </select>
            {fieldError("projectType")}
          </div>
          <div className="field">
            <label htmlFor="location">Project location</label>
            <input
              id="location"
              name="location"
              autoComplete="address-level2"
              placeholder="City, state"
              aria-invalid={invalid("location")}
              aria-describedby={
                invalid("location") ? "location-error" : undefined
              }
            />
            {fieldError("location")}
          </div>
        </div>
      </fieldset>
      <fieldset id="interests">
        <legend>Equipment interests</legend>
        <div className="checkbox-grid">
          {products.map((product) => (
            <label className="check" key={product.slug}>
              <input
                type="checkbox"
                name="interests"
                value={product.slug}
                checked={selected.includes(product.slug)}
                onChange={(event) =>
                  setSelected(
                    event.target.checked
                      ? [...selected, product.slug]
                      : selected.filter((slug) => slug !== product.slug),
                  )
                }
              />
              <span>{product.name}</span>
            </label>
          ))}
        </div>
        {fieldError("interests")}
      </fieldset>
      <fieldset>
        <legend>Schedule & notes</legend>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="timeline">Timeline</label>
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              aria-invalid={invalid("timeline")}
              aria-describedby={
                invalid("timeline") ? "timeline-error" : undefined
              }
            >
              <option value="" disabled>
                Select a timeline
              </option>
              <option>Exploring options</option>
              <option>Within 12 months</option>
              <option>12–24 months</option>
              <option>More than 24 months</option>
            </select>
            {fieldError("timeline")}
          </div>
          <div className="field">
            <label htmlFor="budget">
              Budget range <span className="muted">(optional)</span>
            </label>
            <select id="budget" name="budget" defaultValue="">
              <option value="">Prefer not to say</option>
              <option>Under $100,000</option>
              <option>$100,000–$500,000</option>
              <option>$500,000–$1,000,000</option>
              <option>Over $1,000,000</option>
            </select>
          </div>
          <div className="field field-full">
            <label htmlFor="notes">
              Project notes <span className="muted">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Tell us about the facility, activities, and equipment package you are considering."
            />
          </div>
        </div>
      </fieldset>
      <button className="button" type="submit">
        Prepare Project Request
      </button>
    </form>
  );
}
