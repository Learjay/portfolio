import emailjs from '@emailjs/browser';
import type { ContactFormState } from '../types/portfolio';

const CONTACT_EMAIL = 'ljayencina@gmail.com';

export class EmailDeliveryConfigurationError extends Error {
  constructor() {
    super('Email delivery is not configured.');
    this.name = 'EmailDeliveryConfigurationError';
  }
}

export async function sendContactEmail(form: ContactFormState): Promise<void> {
  const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
    import.meta.env;

  if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
    throw new EmailDeliveryConfigurationError();
  }

  await emailjs.send(
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    {
      to_email: CONTACT_EMAIL,
      from_name: form.name.trim(),
      reply_to: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    },
    { publicKey: VITE_EMAILJS_PUBLIC_KEY },
  );
}
