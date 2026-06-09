import { Mail, Phone, MapPin, Send } from "lucide-react";
import { color, motion, styleEffect } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactUsImg from "./assets/contact_us.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const ulStyle = {
    marginLeft: "1.65em",
  };
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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
      setStatus("error");
      setErrorMessage(
        "Missing EmailJS environment variables. Check `redesign/.env`."
      );
      console.error("Missing EmailJS environment variables");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      setStatus("success");
      setErrorMessage(null);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      console.log("EmailJS send response", res);
    } catch (err: any) {
      console.error("EmailJS send error", err);
      setStatus("error");
      const msg =
        err?.text || err?.message || JSON.stringify(err) || "Unknown error";
      setErrorMessage(msg);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="bg-center bg-no-repeat pt-14 pb-16 px-12 sm:px-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center drop-shadow-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img
            src={contactUsImg}
            alt="Contact Us"
            className="mx-auto mb-6 h-auto max-w-[280px] sm:max-w-[400px] md:max-w-[500px]"
          />

          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            Ready to transform your business with digital solutions? Get in
            touch and let's discuss your project.
          </p>
        </motion.div>

        <div className="flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} // 2. Changed slide-in from horizontal to vertical fade
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl" // 3. Set a clean, wider form max-width constraint for a centered block
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>

              {status === "success" && (
                <div className="mt-3 text-green-600">
                  Thank you — your message has been sent.
                </div>
              )}
              {status === "error" && (
                <div className="mt-3 text-red-600">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}

              {errorMessage && (
                <div className="mt-2 text-sm text-red-600 break-words">
                  Error: {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h5>About company</h5>
            <p>
              Our mission behind our business is to help smaller organizations
              streamline processes that would normally require manual efforts
              such as data capture, keyed in input, or copy/paste of information
              through the use of automation tools. It all starts with an
              evaluation of day to day operations and how processes flow. Then
              the process is broke down step by step to identify areas of
              opportunity.
            </p>
            <p>
              These areas may include things as simple as basic templates or as
              complex as a custom built application or web page to take in data
              from end users. It may also consist of exposing available tools
              that leaders may not even have known existed. Whatever the case,
              Stallion Ranch Media is driven by helping others succeed.
            </p>
          </div>
          <div className="footer-column">
            <h5>Opening hours</h5>
            <table className="table text-center text-gray-900">
              <tbody className="font-weight-normal">
                <tr>
                  <td>M-F: </td>
                  <td> 4pm - 8pm</td>
                </tr>
                <tr>
                  <td>Sat: </td>
                  <td> 8am - 1pm</td>
                </tr>
                <tr>
                  <td>Sun: </td>
                  <td> Closed</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <ul className="fa-ul">
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-home"></i>
                </span>
                <span className="ms-2">Knoxville, IA 50138, US</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="ms-2">info@stallionranchmedia.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="ms-2">641-891-7329</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a type="button" className="btn btn-floating btn-warning btn-lg">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a type="button" className="btn btn-floating btn-warning btn-lg">
            <i className="fab fa-dribbble"></i>
          </a>
          <a type="button" className="btn btn-floating btn-warning btn-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a type="button" className="btn btn-floating btn-warning btn-lg">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div>
        <div className="text-center text-gray-900">
          <p>
            &copy; {new Date().getFullYear()} Stallion Ranch Media. All rights
            reserved.
          </p>
          <p className="mt-2">
            Helping small businesses work smarter through digital solutions.
          </p>
        </div>
      </footer>

      {/* <!-- End of .container --> */}
    </section>
  );
}
