import { Cpu, Cloud, Shield, Globe } from 'lucide-react';
import { Overview, Section, Heading, BlockGrid, PhotoBand } from '../kit';
import { servicePhotos, fallbackServicePhotos } from '../photos';

/**
 * DefaultServiceContent Component
 * Standard content layout for services without custom sections
 */
interface DefaultServiceContentProps {
  serviceName: string;
  slug?: string;
  longDesc?: string;
  features?: string[];
  benefits?: string[];
}

const featureIcons = [Cpu, Cloud, Shield, Globe];

export const DefaultServiceContent = ({
  serviceName,
  slug = '',
  longDesc,
  features = [],
  benefits = []
}: DefaultServiceContentProps) => {
  const pics = servicePhotos[slug] ?? fallbackServicePhotos;
  return (
    <>
      <Overview image={pics.a} benefits={benefits}>
        <p>
          {longDesc || `Detailed information about ${serviceName} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
        </p>
      </Overview>

      <PhotoBand photo={pics.b} />

      {features.length > 0 && (
        <Section tone="grey">
          <Heading title="Core Capabilities" />
          <BlockGrid
            cols={features.length % 3 === 0 ? 3 : 2}
            items={features.map((feature, idx) => ({
              icon: featureIcons[idx % 4],
              num: String(idx + 1).padStart(2, '0'),
              title: feature,
            }))}
          />
        </Section>
      )}
    </>
  );
};
