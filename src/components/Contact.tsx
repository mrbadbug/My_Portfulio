import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Github, Mail, MapPin, Phone } from 'lucide-react';

function FloatingInput({
  label,
  name,
  type = 'text',
  isTextArea = false,
  value,
  onChange
}: {
  label: string;
  name: string;
  type?: string;
  isTextArea?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative mb-8">
      <label
        className={`absolute left-0 transition-all duration-300 pointer-events-none
        ${
          isFocused || hasValue
            ? '-top-6 text-xs text-coral font-bold tracking-widest uppercase'
            : 'top-2 text-navy/40 text-base'
        }`}
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b-2 border-navy/10 py-2 text-navy focus:outline-none focus:border-coral transition-colors resize-none h-32"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b-2 border-navy/10 py-2 text-navy focus:outline-none focus:border-coral transition-colors"
        />
      )}
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_uhgo14c",
        "template_j8ttfe6",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "fakb01rO3trEHRVYD"
      );

      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-coral font-medium tracking-widest uppercase mb-4">
              Contact
            </h2>

            <h3 className="text-5xl md:text-7xl font-playfair font-bold text-navy mb-8 leading-tight">
              Let's Build <br />
              Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-lavender">
                Great
              </span>
              .
            </h3>

            <p className="text-navy/70 text-lg max-w-md mb-12">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-coral">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">01864034868</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-coral">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">
                  monir222051101801@diu.edu.bd
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-coral">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">
                  Mirpur-2, Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/mrbadbug"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-full bg-navy text-cream flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-navy/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-bl-full" />

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FloatingInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <FloatingInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <FloatingInput
                label="Message"
                name="message"
                isTextArea
                value={formData.message}
                onChange={handleChange}
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-navy to-navy-light text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}