import type { Metadata } from "next";
import Link from "next/link";
import { companyProfile } from "@/content/profile";

export const metadata: Metadata = { title: "Company Profile", description: "Fictional manufacturer capabilities, service territory, classifications, and procurement profile." };

export default function CompanyProfilePage() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: companyProfile.legalName, alternateName: companyProfile.tradeName, foundingDate: String(companyProfile.founded), address: companyProfile.headquarters, areaServed: companyProfile.serviceTerritory, knowsAbout: companyProfile.capabilities };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="page-hero"><div className="container"><span className="eyebrow">Manufacturer profile</span><h1>{companyProfile.legalName}</h1><p className="lede">A fictional Indiana manufacturer of athletic facility equipment for education, municipal recreation, and public-use projects.</p></div></header>
      <section className="section"><div className="container profile-facts">
        <dl className="profile-summary">
          <div><dt>Trade name</dt><dd>{companyProfile.tradeName}</dd></div><div><dt>Founded</dt><dd>{companyProfile.founded}</dd></div><div><dt>Headquarters</dt><dd>{companyProfile.headquarters}</dd></div><div><dt>Facility</dt><dd>{companyProfile.facility}</dd></div><div><dt>Company size</dt><dd>{companyProfile.employees}</dd></div><div><dt>Project contact</dt><dd>{companyProfile.phone}<br />{companyProfile.email}</dd></div>
        </dl>
        <div className="grid-2 profile-columns"><article><span className="eyebrow">Core capabilities</span><h2>What we furnish.</h2><ul className="meta-list">{companyProfile.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span className="eyebrow">Public-sector markets</span><h2>Where we work.</h2><ul className="meta-list">{companyProfile.markets.map((item) => <li key={item}>{item}</li>)}</ul></article></div>
      </div></section>
      <section className="section cream-band"><div className="container grid-2 profile-columns"><article><span className="eyebrow">Service territory</span><h2>Dealer-supported coverage.</h2><ul className="meta-list">{companyProfile.serviceTerritory.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span className="eyebrow">Classification codes</span><h2>Common sourcing identifiers.</h2><table className="spec-table"><tbody>{companyProfile.classificationCodes.map((item) => <tr key={`${item.system}-${item.code}`}><th>{item.system} {item.code}</th><td>{item.label}</td></tr>)}</tbody></table></article></div></section>
      <section className="section"><div className="container grid-2 profile-columns"><article><span className="eyebrow">Procurement</span><h2>Routes to a project quote.</h2><ul className="meta-list">{companyProfile.procurement.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="notice"><strong>Fictional sourcing profile</strong><p>Every company fact, code assignment, contract number, address, and capability on this page is synthetic demonstration data. No real certification, contract, or public purchasing eligibility is claimed.</p><Link className="text-link" href="/products/catalog">Review the equipment catalog →</Link></article></div></section>
    </>
  );
}

