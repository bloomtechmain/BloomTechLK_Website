import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

interface InquiryEmailParams {
  name: string;
  email: string;
  company?: string;
  interests?: string;
  message: string;
}

export const sendInquiryEmail = (params: InquiryEmailParams) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: params.name,
      email: params.email,
      company: params.company || '-',
      interests: params.interests || '-',
      message: params.message,
    },
    { publicKey: PUBLIC_KEY }
  );
};
