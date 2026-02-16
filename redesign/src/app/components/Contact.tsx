import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { color, motion, styleEffect } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';



export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize EmailJS with the public key when running in the browser
  useEffect(() => {
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (e) {
        // ignore - init may already have been called by send
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Missing EmailJS environment variables. Check `redesign/.env`.');
      console.error('Missing EmailJS environment variables');
      return;
    }

    setStatus('sending');
    setErrorMessage(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setErrorMessage(null);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      console.log('EmailJS send response', res);
    } catch (err: any) {
      console.error('EmailJS send error', err);
      setStatus('error');
      const msg = err?.text || err?.message || JSON.stringify(err) || 'Unknown error';
      setErrorMessage(msg);
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Ready to transform your business with digital solutions? Get in touch and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-900 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select a service</option>
                  <option value="web-app">Web Application</option>
                  <option value="website">Website</option>
                  <option value="graphics">Graphics</option>
                  <option value="video">Video</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Describe your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>

              {status === 'success' && (
                <div className="mt-3 text-green-600">Thank you — your message has been sent.</div>
              )}
              {status === 'error' && (
                <div className="mt-3 text-red-600">Sorry, something went wrong. Please try again later.</div>
              )}

              {errorMessage && (
                <div className="mt-2 text-sm text-red-600 break-words">Error: {errorMessage}</div>
              )}


            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-700 to-yellow-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-yellow-100 mb-1">Email</div>
                    <a href="mailto:info@stallionranchmedia.com" className="hover:text-yellow-100 transition-colors">
                      info@stallionranchmedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-yellow-100 mb-1">Phone</div>
                    <a href="tel:+16418917329" className="hover:text-yellow-100 transition-colors">
                      (641) 891-7329
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-yellow-100 mb-1">Location</div>
                    <div>Serving Small Businesses Nationwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent rounded-2xl p-8">
              <h3 className="text-2xl text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span className="text-gray-900">Deep understanding of your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span className="text-gray-900">Custom solutions, not cookie-cutter templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span className="text-gray-900">Focus on automation and efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span className="text-gray-900">Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">✓</span>
                  <span className="text-gray-900">Small business pricing and flexibility</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-gray-900">
        <div className="text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} Stallion Ranch Media. All rights reserved.</p>
          <p className="mt-2">Helping small businesses work smarter through digital solutions.</p>
        </div>

      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4 sm-layout">
          {/* <!-- Facebook --> */}
          <a
            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/profile.php?id=61550360122580"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-facebook-f"></i></a>

          {/* <!-- Instagram --> */}
          <a
            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/ranchtech1/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i></a>

          {/* <!-- Linkedin --> */}
          <a
            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/company/stallion-ranch-media/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-linkedin"></i></a>
          {/* <!-- Github --> */}
          <a
            data-mdb-ripple-init className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/HREngCode"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-github"></i></a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
  {/* <!-- Grid container --> */}
      </div>
    </section>
  );
}