import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs, socialMedia } from '../utils/seoConfig';
import { Breadcrumb, Eyebrow, ContactRows, GUTTER } from '../components/kit';
import { policies, Policy, POLICY_LAST_UPDATED } from '../data/policiesData';

const others = (current: Policy) => Object.values(policies).filter(p => p.slug !== current.slug);

const PolicyPage = ({ policy }: { policy: Policy }) => (
  <div className="min-h-screen bg-white">
    <SEO config={seoConfigs[policy.seoKey]} />

    <section className="bg-navy">
      <div className={`${GUTTER} pt-32 lg:pt-40 pb-14 lg:pb-20`}>
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: policy.title }]} />
        <Eyebrow light>Legal</Eyebrow>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-4">{policy.title}</h1>
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45">Last updated: {POLICY_LAST_UPDATED}</p>
      </div>
    </section>

    <section className="py-16 lg:py-20">
      <div className={`${GUTTER} grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20`}>
        <article className="max-w-3xl text-[16px] leading-relaxed text-gray-600">
          <p className="text-lg text-navy/80 mb-10">{policy.intro}</p>
          {policy.sections.map(section => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-extrabold text-navy tracking-tight mb-4">{section.heading}</h2>
              {section.paragraphs?.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
              {section.list && (
                <ul className="space-y-2.5 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <aside className="space-y-8 lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-navy p-6">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/45 mb-5">Contact Us</h2>
            <ContactRows rows={[
              { icon: Phone, label: 'Phone', value: socialMedia.phone, href: `tel:${socialMedia.phone.replace(/\s/g, '')}` },
              { icon: Mail, label: 'Email', value: socialMedia.email, href: `mailto:${socialMedia.email}` },
              { icon: MapPin, label: 'Address', value: 'Makola - Udupila Rd, Mawaramandiya, Western Province, Sri Lanka' },
            ]} />
          </div>
          <div className="rounded-2xl border border-border-grey p-6">
            <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-4">Other Policies</h2>
            <ul className="space-y-3">
              {others(policy).map(p => (
                <li key={p.slug}>
                  <Link to={`/${p.slug}`} className="font-semibold text-navy hover:text-brand-orange-dark transition-colors">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <Footer />
  </div>
);

export default PolicyPage;
