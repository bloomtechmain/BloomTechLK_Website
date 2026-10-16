import {
  ShieldAlert, Key, Monitor, Lock, History, Search, FileCheck,
  ShieldCheck, Shield, Activity, Cpu, Repeat, Eye, Radar, ClipboardCheck
} from 'lucide-react';
import {
  Section, Heading, Explorer, BlockGrid, FeatureBand, StackTable, FlowChart, CtaBand, PhotoBand, IconTiles, Hl,
  CtaFormCard, SelectWrap, fieldDarkCls, labelDarkCls, selectDarkCls,
} from '../../kit';
import { servicePhotos } from '../../photos';

/**
 * SecurityDataProtectionContent Component
 * Custom content section for Security & Data Protection service
 */
interface SecurityDataProtectionContentProps {
  onOpenModal: () => void;
}

const pics = servicePhotos['security-data-protection'];

export const SecurityDataProtectionContent = ({ onOpenModal }: SecurityDataProtectionContentProps) => {
  return (
    <>
      {/* Defense-in-Depth Strategy */}
      <Section tone="white">
        <Heading title="Our Defense-in-Depth Strategy" sub="Multi-layered protection beyond the firewall" />
        <Explorer
          items={[
            {
              num: 'I', icon: ShieldAlert,
              title: <>Perimeter &amp; Network Hardening</>,
              desc: <>We build <Hl>"Invisible" networks</Hl>. Utilizing Next-Gen Firewalls (NGFW), Intrusion Prevention Systems (IPS), and strict VLAN segmentation, we ensure that even if one device is compromised, the rest of your infrastructure remains an island.</>,
            },
            {
              num: 'II', icon: Key,
              title: <>Identity &amp; Access Management (IAM)</>,
              desc: <><Hl>Identity is the new perimeter</Hl>. We implement Zero Trust architectures where every user and device must be verified. This includes Phishing-resistant MFA, Least-Privilege Access, and automated de-provisioning for offboarded employees.</>,
            },
            {
              num: 'III', icon: Monitor,
              title: <>Endpoint Protection &amp; EDR</>,
              desc: <>We move <Hl>beyond traditional antivirus</Hl>. Our Endpoint Detection and Response (EDR) solutions use behavioral AI to stop "Zero-Day" attacks in real-time, isolating infected machines before they can encrypt your files or spread ransomware.</>,
            },
          ]}
        />
      </Section>

      <PhotoBand photo={pics.b} />

      {/* Data Protection & Sovereignty */}
      <Section tone="grey">
        <Heading title={<>Data Protection &amp; Sovereignty</>} sub={<>Securing the "Crown Jewels" of your business</>} />
        <BlockGrid
          cols={3}
          items={[
            { title: 'Encryption at Rest & in Transit', desc: 'Utilizing AES-256 and TLS 1.3 standards to ensure that even if data is intercepted, it remains unreadable.', icon: Lock },
            { title: 'Immutable Backups', desc: 'We design backup systems that cannot be deleted or modified by ransomware, ensuring rapid recovery.', icon: History },
            { title: 'Data Loss Prevention (DLP)', desc: 'Intelligent monitoring that prevents sensitive information (SSNs, IP) from leaving the company network.', icon: ShieldAlert },
          ].map((it, i) => ({ ...it, num: String(i + 1).padStart(2, '0') }))}
        />
      </Section>

      {/* The "CISA Advantage": Audit & Compliance */}
      <FeatureBand
        eyebrow="CISA Audit Mastery"
        title={<>Security That <br />Passes the Audit.</>}
        text={<>As a <Hl>CISA-certified professional</Hl>, I don't just "secure" your network; I make it <Hl>auditable</Hl>. We align your infrastructure with global standards, ensuring you are ready for any regulatory hurdle.</>}
        points={[
          { title: 'Vulnerability Assessments', desc: 'Regular scanning of server-grade hardware to patch exploits before they are used.', icon: Search },
          { title: 'Gap Analysis', desc: 'Aligning your current posture with SOC2, HIPAA, PCI-DSS, or ISO 27001 frameworks.', icon: FileCheck },
          { title: 'Incident Response Planning', desc: 'We provide the "Playbook" for breach response, minimizing legal exposure and downtime.', icon: ShieldAlert },
        ]}
        badge={{ icon: Shield, big: 'CISA', caption: 'Identity Verified Authority' }}
      />

      {/* The Security Tech Stack */}
      <Section tone="white">
        <Heading title="The Security Tech Stack" sub="Enterprise-grade systems we deploy and manage" />
        <StackTable
          head={['Category', 'Enterprise Systems']}
          rows={[
            { label: 'Firewalls', value: 'Fortinet, Palo Alto, pfSense (Hardware Accelerated)', icon: Shield },
            { label: 'Endpoint (EDR)', value: 'SentinelOne, CrowdStrike, or Microsoft Defender for Business', icon: Monitor },
            { label: 'Identity', value: 'Okta, Azure AD (Entra ID), Duo Security', icon: Key },
            { label: 'SIEM / Logging', value: 'Wazuh, Splunk, or ELK Stack for real-time monitoring', icon: Activity },
            { label: 'Hardware Entropy', value: 'TPM 2.0 integration and hardware-based encryption keys', icon: Cpu },
          ]}
        />
      </Section>

      {/* The 4-Phase Security Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Security Lifecycle" />
        <FlowChart
          items={[
            { step: '1', icon: Search, title: 'Threat Modeling', desc: 'We identify your most "at-risk" assets and likely attack vectors.' },
            { step: '2', icon: Shield, title: 'Hardening & Implementation', desc: 'We deploy the "Shield"—firewalls, MFA, and encryption.' },
            { step: '3', icon: Radar, title: 'Continuous Monitoring', desc: '24/7 logging and automated alerts for suspicious behavior like "Impossible Travel" logins.' },
            { step: '4', icon: ClipboardCheck, title: 'Governance & Review', desc: 'Quarterly security reviews and policy updates to stay ahead of new exploit trends.' },
          ]}
        />
      </Section>

      {/* Proactive "Human Firewalls" */}
      <Section tone="white">
        <Heading
          eyebrow="Security Awareness Training"
          title={<>Proactive "Human Firewalls"</>}
          image={pics.a}
        >
          <p>
            90% of breaches start with human error. We provide managed <Hl>Phishing Simulations</Hl> and security training for your staff, turning your employees from your biggest risk into your strongest line of defense.
          </p>
          <div className="pt-4">
            <IconTiles
              cols="sm:grid-cols-1"
              items={[
                { label: 'Managed Phishing Simulations', icon: ShieldCheck },
                { label: 'Security Culture Development', icon: Repeat },
                { label: 'Compliance Training Modules', icon: Eye },
              ]}
            />
          </div>
        </Heading>
      </Section>

      {/* Final Call to Action */}
      <CtaBand
        eyebrow="Active Protection On-Call"
        title={<>Don't Wait for the Breach <br />to Build the Shield.</>}
        text={<>Is your current data protection strategy "hope"? Let's replace it with a certified, resilient architecture.</>}
      >
        <CtaFormCard onSubmit={onOpenModal} button="Secure My Business">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelDarkCls}>Full Name</label>
              <input type="text" placeholder="John Doe" className={fieldDarkCls} />
            </div>
            <div>
              <label className={labelDarkCls}>Industry</label>
              <input type="text" placeholder="Finance" className={fieldDarkCls} />
            </div>
            <div>
              <label className={labelDarkCls}>Employees</label>
              <input type="number" placeholder="50" className={fieldDarkCls} />
            </div>
            <div>
              <label className={labelDarkCls}>Primary Concern</label>
              <SelectWrap>
                <select defaultValue="" className={selectDarkCls}>
                  <option value="" disabled className="text-gray-900 bg-white">Select a Concern...</option>
                  <option value="ransomware" className="text-gray-900 bg-white">Ransomware</option>
                  <option value="compliance" className="text-gray-900 bg-white">Compliance Audit</option>
                  <option value="data_leakage" className="text-gray-900 bg-white">Data Leakage</option>
                </select>
              </SelectWrap>
            </div>
          </div>
        </CtaFormCard>
      </CtaBand>
    </>
  );
};


