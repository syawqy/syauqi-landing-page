import ServicesGrid from '../components/ServicesGrid';
import CtaContact from '../components/CtaContact';
import ProcessSteps from '../components/ProcessSteps';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ServicesPage() {
  usePageTitle('Layanan · Syauqi Fuadi');
  return (
    <>
      <section className="sec" style={{ paddingTop: 140 }}>
        <div className="container">
          <ServicesGrid extended />
        </div>
      </section>
      <ProcessSteps />
      <CtaContact />
    </>
  );
}
