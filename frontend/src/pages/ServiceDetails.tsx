import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getServiceBySlug, ServiceItem } from '../data/servicesData';
import { getServiceConfig } from '../config/serviceConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig } from '../utils/seoConfig';
import {
  BackgroundGlows,
  ServiceBreadcrumb,
  ServiceTagline,
  ServiceCTA,
  ServiceHeroImage,
  DefaultServiceContent,
  CustomQRNFCContent,
  SEOContent,
  CustomWebsiteDesignContent,
  OnlineMarketingContent,
  CustomMobileAppContent,
  AICustomDevContent,
  AssetLifecycleContent,
  AIMachineLearningContent,
  CustomCRMContent,
  ProfessionalITConsultingContent,
  SecurityDataProtectionContent,
  CustomWebAppContent,
  BloomAuditContent
} from '../components/service-details';

// Lazy load the modal
const ExpertFormModal = lazy(() => import('../components/ExpertFormModal'));

// Note: Additional custom service sections can be extracted following the NetworkInfrastructureContent pattern
// - AICustomDevContent.tsx
// - ManagedAVServicesContent.tsx
// - etc.

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceId) {
      const foundService = getServiceBySlug(serviceId);
      setService(foundService || null);
    }
  }, [serviceId]);

  // Service not found page
  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/80 flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-white/70 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 bg-[#ff6b00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e65c00] transition-colors shadow-lg">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    );
  }

  // Get service configuration
  const config = getServiceConfig(service.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/30 font-sans selection:bg-[#ff6b00] selection:text-white relative">
      <SEO 
        config={getSEOConfig('service', service.slug)}
        breadcrumbs={[
          { name: 'Home', url: 'https://bloomtechusa.com' },
          { name: 'Services', url: 'https://bloomtechusa.com/#services' },
          { name: service.name, url: `https://bloomtechusa.com/services/${service.slug}` }
        ]}
      />
      
      <Navbar />
      
      {/* Background decorations */}
      <BackgroundGlows />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

        {/* Full-bleed background image with gradient blends */}
        {config.heroBgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${config.heroBgImage})` }}
            />
            {/* Left-to-right: navy over text, image visible on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a36] via-[#0c1a36]/90 to-[#0c1a36]/30" />
            {/* Top edge: blend from page navbar area */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a36]/70 via-transparent to-transparent" />
            {/* Bottom edge: blend into the page below */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0c1a36] to-transparent" />
          </>
        )}

        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start relative z-10"
            >
              <ServiceBreadcrumb serviceName={service.name} />

              {config.tagline && (
                <ServiceTagline icon={config.tagline.icon} text={config.tagline.text} />
              )}

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 max-w-4xl drop-shadow-2xl">
                {config.heroTitle || service.name}
              </h1>

              <p className="text-xl lg:text-2xl text-blue-50/90 font-medium leading-relaxed max-w-3xl mb-12 drop-shadow-md">
                {config.heroDescription || service.desc}
              </p>

              <ServiceCTA
                primaryButton={{
                  text: config.primaryCTA.text,
                  icon: config.primaryCTA.icon,
                  onClick: () => setIsModalOpen(true)
                }}
                secondaryButton={{
                  text: config.secondaryCTA.text,
                  icon: config.primaryCTA.icon
                }}
              />
            </motion.div>

            {/* Right Column: card image only when no full-bleed bg */}
            {!config.heroBgImage && (
              <ServiceHeroImage imageUrl={service.imageUrl} serviceName={service.name} />
            )}
          </div>
        </div>
      </section>

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

    case 'custom-mobile-application':
      return <CustomMobileAppContent onOpenModal={onOpenModal} />;

    case 'ai-custom-development-automation':
      return <AICustomDevContent onOpenModal={onOpenModal} />;

    case 'asset-lifecycle-management':
      return <AssetLifecycleContent onOpenModal={onOpenModal} />;

    case 'ai-machine-learning':
      return <AIMachineLearningContent onOpenModal={onOpenModal} />;

    case 'custom-crm-erp-solutions':
      return <CustomCRMContent onOpenModal={onOpenModal} />;

    case 'professional-it-consulting':
      return <ProfessionalITConsultingContent onOpenModal={onOpenModal} />;

    case 'security-data-protection':
      return <SecurityDataProtectionContent onOpenModal={onOpenModal} />;

    case 'custom-web-applications':
      return <CustomWebAppContent onOpenModal={onOpenModal} />;

    case 'bloomaudit':
      return <BloomAuditContent onOpenModal={onOpenModal} />;

    default:
      // Services without custom content use the default layout
      return (
        <DefaultServiceContent
          serviceName={service.name}
          longDesc={service.longDesc}
          features={service.features}
          benefits={service.benefits}
        />
      );
  }
}

export default ServiceDetails;
