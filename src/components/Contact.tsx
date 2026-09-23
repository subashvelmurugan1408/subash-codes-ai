import { useRef, useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Enter a valid email address').max(255),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message is too long'),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mountedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website || Date.now() - mountedAt.current < 2500) return;
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const next: Record<string, string> = {};
      validation.error.issues.forEach(issue => { const field = String(issue.path[0]); if (!next[field]) next[field] = issue.message; });
      setErrors(next);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      await emailjs.send('service_d7fbl7h', 'template_pf8vq9j', {
        from_name: validation.data.name, from_email: validation.data.email, message: validation.data.message, to_name: 'Subash V',
      }, '6kcuM48Xd1Za5o7fB');
      setFormData({ name: '', email: '', message: '' });
      mountedAt.current = Date.now();
      toast({ title: 'Message sent', description: "Thanks for reaching out. I'll get back to you soon." });
    } catch {
      toast({ title: 'Message not sent', description: 'Please try again or email me directly.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return <section id="contact" className="contact-section"><div className="section-wrap">
    <div className="section-heading reveal"><span className="section-number">05 / CONTACT</span><span className="section-rule" /></div>
    <div className="contact-grid"><div className="contact-copy reveal"><span className="contact-kicker">HAVE AN IDEA IN MIND?</span><h2>LET'S MAKE<br/><span>IT REAL.</span></h2><p>Have a project, an opportunity, or just want to connect? I'd love to hear from you.</p><a className="contact-email" href="mailto:subashvelmurugan8@gmail.com">subashvelmurugan8@gmail.com <ArrowUpRight size={19}/></a><span className="contact-location">BASED IN COIMBATORE, INDIA</span></div>
    <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
      <div className="form-topline">SEND A MESSAGE <span>01 — 03</span></div>
      <div className="form-field"><label htmlFor="contact-name">YOUR NAME</label><Input id="contact-name" name="name" value={formData.name} onChange={change} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} maxLength={100}/>{errors.name && <span id="name-error" className="field-error">{errors.name}</span>}</div>
      <div className="form-field"><label htmlFor="contact-email">EMAIL ADDRESS</label><Input id="contact-email" name="email" type="email" value={formData.email} onChange={change} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} maxLength={255}/>{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
      <div className="form-field"><label htmlFor="contact-message">YOUR MESSAGE</label><Textarea id="contact-message" name="message" value={formData.message} onChange={change} placeholder="Tell me what you're thinking..." rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} maxLength={1000}/>{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
      <div className="trap-field" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)}/></div>
      <Button type="submit" className="submit-button" disabled={isSubmitting}>{isSubmitting ? <><Loader2 className="animate-spin"/> SENDING</> : <>SEND MESSAGE <ArrowUpRight size={18}/></>}</Button>
    </form></div>
  </div></section>;
};
export default Contact;
