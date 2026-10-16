import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getServiceBySlug, ServiceItem } from '../data/servicesData';
import { getServiceConfig } from '../config/serviceConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig, siteUrl } from '../utils/seoConfig';
import { PageHero, Breadcrumb, PrimaryButton, TextLink } from '../components/kit';
import { servicePhotos, fallbackServicePhotos } from '../components/photos';
import {
  DefaultServiceContent,
  CustomQRNFCContent,
  SEOContent,
  CustomWebsiteDesignContent,
  OnlineMarketingContent,
  CustomMobileWebAppContent,
  AICustomDevContent,
  AIMachineLearningContent,
  CustomCRMContent,
  ProfessionalITConsultingContent,
  SecurityDataProtectionContent,
  BloomAuditContent,
  ComingSoonContent
} from '../components/service-details';

// Lazy load the modal
const ExpertFormModal = lazy(() => import('../components/ExpertFormModal'));

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service: ServiceItem | null = useMemo(
    () => (serviceId ? getServiceBySlug(serviceId) ?? null : null),
    [serviceId]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Service not found page
  if (!service) {
    return (
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center pt-24 px-4 text-center">
        <SEO config={{ title: 'Service Not Found - BloomTech.lk', description: 'This service page does not exist or has been moved.' }} noindex />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Service Not Found</h1>
        <p className="text-white/65 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <PrimaryButton to="/" icon={ArrowLeft}>Return Home</PrimaryButton>
      </div>
    );
  }

  // Get service configuration
  const config = getServiceConfig(service.slug);
  const pics = servicePhotos[service.slug] ?? fallbackServicePhotos;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white">
      <SEO
        config={getSEOConfig('service', service.slug)}
        breadcrumbs={[
          { name: 'Home', url: `${siteUrl}/` },
          { name: service.name, url: `${siteUrl}/services/${service.slug}/` }
        ]}
      />

      <Navbar />

      {/* Hero — copy on the left, full-bleed real photo on the right */}
      <PageHero
        photo={pics.hero}
        breadcrumb={<Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Services' }, { label: service.name }]} />}
        eyebrow={config.tagline?.text}
        title={config.heroTitle || service.name}
        text={config.heroDescription || service.desc}
        minH="lg:min-h-[680px]"
      >
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <PrimaryButton onClick={() => setIsModalOpen(true)} icon={config.primaryCTA.icon}>
            {config.primaryCTA.text}
          </PrimaryButton>
          <TextLink href="#details">{config.secondaryCTA.text}</TextLink>
        </div>
      </PageHero>

      <div id="details" className="scroll-mt-24" />

      {/* Main Content Section */}
      {renderServiceContent(service, () => setIsModalOpen(true))}

      {/* Expert Form Modal */}
      <Suspense fallback={<div />}>
        {isModalOpen && (
          <ExpertFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={service.name}
            serviceSlug={service.slug}
          />
        )}
      </Suspense>

      <Footer />
    </div>
  );
};

/**
 * Render service-specific content based on slug
 * Custom service sections are extracted to separate component files for better maintainability
 */
function renderServiceContent(service: ServiceItem, onOpenModal: () => void) {
  switch (service.slug) {
    case 'custom-qr-nfc-applications':
      return <CustomQRNFCContent onOpenModal={onOpenModal} />;

    case 'search-engine-optimization':
      return <SEOContent onOpenModal={onOpenModal} />;

    case 'custom-websites-design':
      return <CustomWebsiteDesignContent onOpenModal={onOpenModal} />;

    case 'online-marketing-services':
      return <OnlineMarketingContent onOpenModal={onOpenModal} />;

    case 'custom-mobile-web-applications':
      return <CustomMobileWebAppContent onOpenModal={onOpenModal} />;

    case 'ai-custom-development-automation':
      return <AICustomDevContent onOpenModal={onOpenModal} />;

    case 'ai-machine-learning':
      return <AIMachineLearningContent onOpenModal={onOpenModal} />;

    case 'custom-crm-erp-solutions':
      return <CustomCRMContent onOpenModal={onOpenModal} />;

    case 'professional-it-consulting':
      return <ProfessionalITConsultingContent onOpenModal={onOpenModal} />;

    case 'security-data-protection':
      return <SecurityDataProtectionContent onOpenModal={onOpenModal} />;

    case 'bloomaudit':
      return <BloomAuditContent onOpenModal={onOpenModal} />;

    case 'medical-system':
      return <ComingSoonContent serviceName={service.name} />;

    default:
      // Services without custom content use the default layout
      return (
        <DefaultServiceContent
          serviceName={service.name}
          slug={service.slug}
          longDesc={service.longDesc}
          features={service.features}
          benefits={service.benefits}
        />
      );
  }
}

export default ServiceDetails;
