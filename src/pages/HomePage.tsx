import Hero from '../components/Hero';
import TechStrip from '../components/TechStrip';
import ShowcaseSection from '../components/ShowcaseSection';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSteps from '../components/ProcessSteps';
import WhyMe from '../components/WhyMe';
import CtaContact from '../components/CtaContact';
import { usePageTitle } from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle('Syauqi Fuadi · Jasa IT Consulting & Web Development untuk Bisnis Berkembang');
  return (
    <>
      <Hero />
      <TechStrip />
      <ShowcaseSection />
      <section className="sec" id="layanan" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <ServicesGrid />
        </div>
      </section>
      <ProcessSteps />
      <WhyMe />
      <CtaContact />
    </>
  );
}
