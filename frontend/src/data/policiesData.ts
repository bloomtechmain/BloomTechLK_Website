// Policy documents required by PayHere / partner banks for online payment activation.
// Adapted from PayHere's sample documents for BloomTech.lk's software, services and subscriptions.

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

export interface Policy {
  slug: string;
  seoKey: string;
  title: string;
  intro: string;
  sections: PolicySection[];
}

export const POLICY_LAST_UPDATED = '20 October 2026';

export const policies: Record<string, Policy> = {
  refund: {
    slug: 'refund-policy',
    seoKey: 'refundPolicy',
    title: 'Refund Policy',
    intro: 'Thank you for choosing BloomTech.lk. We value your satisfaction and strive to provide you with the best possible experience when purchasing our products and services online. If, for any reason, you are not completely satisfied with your purchase, we are here to help.',
    sections: [
      {
        heading: 'Returns',
        paragraphs: [
          'We accept returns of physical hardware (such as POS terminals, printers, scanners and networking equipment) within 14 days from the date of delivery. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.',
          'Software subscriptions (such as BloomSwift POS, BloomAudit and BloomLTO) may be cancelled within 7 days of the initial purchase for a full refund of the first billing period, provided the service has not been substantially used.',
        ],
      },
      {
        heading: 'Refunds',
        paragraphs: [
          'Once we receive your return and inspect the item, or review your cancellation request, we will notify you of the status of your refund. If your refund is approved, we will initiate a refund to your original method of payment. Please note that the refund amount will exclude any shipping or delivery charges incurred during the initial purchase.',
        ],
      },
      {
        heading: 'Exchanges',
        paragraphs: [
          'If you would like to exchange a hardware item for a different model or specification, or change your subscription plan, please contact our customer support team within 14 days of receiving your order. We will provide you with further instructions on how to proceed with the exchange.',
        ],
      },
      {
        heading: 'Non-Returnable Items',
        paragraphs: ['Certain items and services are non-returnable and non-refundable. These include:'],
        list: [
          'Gift cards and prepaid vouchers',
          'Downloadable software products and licence keys once delivered or activated',
          'Personalized or custom-made items, including custom software development, website design and other bespoke project work already delivered or in progress',
          'Consulting, installation, training and other professional services already performed',
          'Subscription periods that have already elapsed',
        ],
      },
      {
        heading: 'Damaged or Defective Items',
        paragraphs: [
          'In the unfortunate event that your item arrives damaged or defective, please contact us immediately. We will arrange for a replacement or issue a refund, depending on your preference and product availability.',
        ],
      },
      {
        heading: 'Return Shipping',
        paragraphs: [
          'You will be responsible for paying the shipping costs for returning your item unless the return is due to our error (e.g., wrong item shipped, defective product). In such cases, we will arrange the collection of the item at no cost to you.',
        ],
      },
      {
        heading: 'Processing Time',
        paragraphs: [
          'Refunds and exchanges will be processed within 7 business days after we receive your returned item or approve your cancellation. Please note that it may take additional time for the refund to appear in your account, depending on your bank or payment provider.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'If you have any questions or concerns regarding our refund policy, please contact our customer support team. We are here to assist you and ensure your experience with us is enjoyable and hassle-free.',
        ],
      },
    ],
  },

  privacy: {
    slug: 'privacy-policy',
    seoKey: 'privacyPolicy',
    title: 'Privacy Policy',
    intro: 'At BloomTech.lk, we are committed to protecting the privacy and security of our customers\' personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase on our website. By using our website, you consent to the practices described in this policy.',
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: ['When you visit our website, we may collect certain information about you, including:'],
        list: [
          'Personal identification information (such as your name, email address, phone number and company name) provided voluntarily by you through our contact forms, during registration or during the checkout process.',
          'Payment and billing information necessary to process your orders. Card details are securely handled by our trusted third-party payment processor, PayHere, and are never stored on our servers.',
          'Browsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.',
        ],
      },
      {
        heading: 'Use of Information',
        paragraphs: ['We may use the collected information for the following purposes:'],
        list: [
          'To process and fulfill your orders, including delivery, installation and activation of products and services.',
          'To communicate with you regarding your purchases, provide customer support, and respond to inquiries or requests.',
          'To personalize your experience and present relevant product recommendations and promotions.',
          'To improve our website, products, and services based on your feedback and browsing patterns.',
          'To detect and prevent fraud, unauthorized activities, and abuse of our website.',
        ],
      },
      {
        heading: 'Information Sharing',
        paragraphs: [
          'We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:',
        ],
        list: [
          'Trusted service providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering products. These providers are contractually obligated to handle your data securely and confidentially.',
          'Legal requirements: We may disclose your information if required to do so by law or in response to valid legal requests or orders.',
        ],
      },
      {
        heading: 'Data Security',
        paragraphs: [
          'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: 'Cookies and Tracking Technologies',
        paragraphs: [
          'We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website. You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our website.',
        ],
      },
      {
        heading: 'Changes to the Privacy Policy',
        paragraphs: [
          'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.',
        ],
      },
      {
        heading: 'Contact Us',
        paragraphs: [
          'If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us using the details below.',
        ],
      },
    ],
  },

  terms: {
    slug: 'terms-and-conditions',
    seoKey: 'termsAndConditions',
    title: 'Terms and Conditions',
    intro: 'Welcome to BloomTech.lk. These Terms and Conditions govern your use of our website and the purchase of products and services from our platform. By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any transactions.',
    sections: [
      {
        heading: 'Use of the Website',
        list: [
          'You must be at least 18 years old to use our website or make purchases.',
          'You are responsible for maintaining the confidentiality of your account information, including your username and password.',
          'You agree to provide accurate and current information during the registration and checkout process.',
          'You may not use our website for any unlawful or unauthorized purposes.',
        ],
      },
      {
        heading: 'Product Information and Pricing',
        list: [
          'We strive to provide accurate product and service descriptions, images, and pricing information. However, we do not guarantee the accuracy or completeness of such information.',
          'All prices are listed in Sri Lankan Rupees (LKR) unless stated otherwise. Prices are subject to change without notice. Any promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.',
        ],
      },
      {
        heading: 'Orders and Payments',
        list: [
          'By placing an order on our website, you are making an offer to purchase the selected products or services.',
          'We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.',
          'You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes and delivery fees, to your chosen payment method. Subscriptions are billed in advance for each billing period until cancelled.',
          'We use PayHere, a trusted third-party payment processor, to handle your payment information securely. We do not store or have access to your full payment details.',
        ],
      },
      {
        heading: 'Shipping and Delivery',
        list: [
          'We will make reasonable efforts to ensure timely delivery of hardware and timely activation of software and services.',
          'Delivery times for hardware are estimates (typically 3–7 business days within Sri Lanka) and may vary based on your location and other factors. Software subscriptions and licences are usually activated within 1–2 business days of payment.',
        ],
      },
      {
        heading: 'Returns and Refunds',
        list: [
          'Our Refund Policy governs the process and conditions for returning products, cancelling services and seeking refunds. Please refer to the Refund Policy on our website for more information.',
        ],
      },
      {
        heading: 'Intellectual Property',
        list: [
          'All content and materials on our website, including but not limited to text, images, logos, and graphics, are protected by intellectual property rights and are the property of BloomTech.lk or its licensors.',
          'You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        list: [
          'In no event shall BloomTech.lk, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase and use of our products and services.',
          'We make no warranties or representations, express or implied, regarding the quality, accuracy, or suitability of the products offered on our website, except as expressly stated in a signed agreement or product warranty.',
        ],
      },
      {
        heading: 'Governing Law',
        paragraphs: [
          'These Terms and Conditions are governed by the laws of the Democratic Socialist Republic of Sri Lanka, and any disputes shall be subject to the jurisdiction of the courts of Sri Lanka.',
        ],
      },
      {
        heading: 'Amendments and Termination',
        paragraphs: [
          'We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.',
        ],
      },
    ],
  },
};
