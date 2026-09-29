import Link from "next/link";
import { company, navigation } from "@/content/company";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <>
      <div className="utility">
        <div className="container utility-inner">
          <span>
            {company.location} · {company.descriptor}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">
            Fieldhouse Forge<small>Hickory, Indiana</small>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button" href="/request-quote">
              Request a Quote
            </Link>
          </nav>
          <MobileNavigation />
        </div>
      </header>
    </>
  );
}
