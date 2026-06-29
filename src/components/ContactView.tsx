import React, { useState } from "react";
import { STUDIO_INFO } from "../data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactView: React.FC = () => {
  const [formData, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "beginner",
    ageGroup: "child",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "N/A",
      experience: formData.experience,
      age_group: formData.ageGroup,
      message: formData.message,
      to_name: "Katherine Rosin",
    };

    emailjs
      .send(
        "service_mztebpl",
        "template_6d6d3na",
        templateParams,
        "20uMEFVSKIzNT2jc5",
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);

        // Save submission backup to localStorage
        const savedLeads = JSON.parse(
          localStorage.getItem("studio_leads") || "[]",
        );
        savedLeads.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem("studio_leads", JSON.stringify(savedLeads));

        // Reset form fields
        setFormState({
          name: "",
          email: "",
          phone: "",
          experience: "beginner",
          ageGroup: "child",
          message: "",
        });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        setError(
          "An error occurred while sending your message. Please verify your connection or email directly to katherinerosinfiddle@gmail.com",
        );
      });
  };

  return (
    <div className="animate-fadeIn">
      {/* Banner Header */}
      <section className="relative bg-wood-beige text-wood-dark py-16 px-6 text-center border-b border-wood-border">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">

          <h1 className="font-serif font-normal text-3xl sm:text-5xl tracking-tight leading-tight">
            Contact Me & <br />
            <span className="italic text-wood-sand">Schedule a Trial Lesson</span>
          </h1>

        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-20 px-6 bg-wood-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-wood-sand font-bold block">
                  Studio Contact Information
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-wood-dark tracking-tight leading-tight">
                  Reach Out Directly
                </h2>
                <p className="font-sans text-wood-muted text-sm leading-relaxed">
                  Feel free to send an email, give me a call, or submit the
                  form.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="space-y-4 font-mono text-xs text-wood-muted">
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-center space-x-3 p-4 bg-white hover:bg-wood-beige/40 rounded-sm border border-wood-border shadow-xs transition-all"
                  id="direct-email-card"
                >
                  <Mail className="h-5 w-5 text-wood-sand flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-wood-muted block font-bold">
                      Email Address
                    </span>
                    <span className="font-semibold text-wood-dark hover:underline break-all">
                      {STUDIO_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center space-x-3 p-4 bg-white hover:bg-wood-beige/40 rounded-sm border border-wood-border shadow-xs transition-all"
                  id="direct-phone-card"
                >
                  <Phone className="h-5 w-5 text-wood-sand flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-wood-muted block font-bold">
                      Phone Number
                    </span>
                    <span className="font-semibold text-wood-dark hover:underline">
                      {STUDIO_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-sm border border-wood-border shadow-xs">
                  <MapPin className="h-5 w-5 text-wood-sand mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-wood-muted block font-bold">
                      Studio Address
                    </span>
                    <span className="font-semibold text-wood-dark leading-normal">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram Callout Card */}
              <div className="p-6 bg-wood-beige rounded-sm border border-wood-border space-y-4">
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-wood-sand" />
                  <h3 className="font-serif font-bold text-wood-dark text-base">
                    Follow Me
                  </h3>
                </div>
                <p className="font-sans text-xs text-wood-muted leading-relaxed">
                  Follow me on Instagram to view student
                  progress videos, performance snippets, and updates.
                </p>
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-mono text-xs text-wood-sand font-bold hover:underline"
                  id="instagram-promo-link"
                >
                  <span>@harrogateviolinstudio</span>
                  <Instagram className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 rounded-sm shadow-xs border border-wood-border space-y-6">
              {submitted ? (
                /* Success State */
                <div
                  className="text-center py-12 space-y-4 animate-scaleUp"
                  id="form-success-state"
                >
                  <div className="inline-flex p-4 bg-wood-beige text-wood-sand rounded-full border border-wood-border">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-wood-dark">
                    Thank You! Message Sent.
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-wood-muted max-w-sm mx-auto leading-relaxed">
                    Thanks so much for contacting me! 🎻<br />
                    I've received your message, and I'll get back to you as soon as possible. 
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 border border-wood-border hover:border-wood-sand text-wood-muted hover:text-wood-sand rounded-sm font-mono text-xs uppercase font-bold tracking-wider"
                    id="reset-form-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Native Interactive Form */
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  id="violin-contact-form"
                >
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg text-wood-dark">
                      Inquiry Form
                    </h3>
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 bg-red-50 border border-red-200 text-red-700 p-4 rounded-sm text-xs font-sans">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Full Name */}
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm text-wood-dark"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm text-wood-dark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1 sm:col-span-1">
                      <label
                        htmlFor="phone"
                        className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 07852..."
                        className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm text-wood-dark"
                      />
                    </div>

                    {/* Student Age Category */}
                    <div className="space-y-1 sm:col-span-1">
                      <label
                        htmlFor="ageGroup"
                        className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                      >
                        Student Age
                      </label>
                      <select
                        id="ageGroup"
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm text-wood-dark"
                      >
                        <option value="child">Child (4-12 years)</option>
                        <option value="teen">Teenager (13-17 years)</option>
                        <option value="adult">Adult Learner</option>
                      </select>
                    </div>

                    {/* Student Experience */}
                    <div className="space-y-1 sm:col-span-1">
                      <label
                        htmlFor="experience"
                        className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                      >
                        Experience Level
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm text-wood-dark"
                      >
                        <option value="beginner">Complete Beginner</option>
                        <option value="intermediate">
                          Intermediate (Grades 1-5)
                        </option>
                        <option value="advanced">Advanced (Grades 6-8+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="font-mono text-[9px] uppercase tracking-widest text-wood-muted font-bold block"
                    >
                      Your Message or Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me a bit about your musical background, preferred lesson slots, or any questions you have..."
                      className="w-full px-4 py-3 rounded-sm border border-wood-border bg-wood-light focus:outline-none focus:ring-1 focus:ring-wood-sand font-sans text-xs sm:text-sm leading-relaxed text-wood-dark"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-wood-sand hover:bg-wood-brown disabled:bg-gray-400 text-white rounded-sm font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-md shadow-wood-sand/10"
                      id="submit-form-btn"
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Divider and Google Form CTA */}
                  <div className="relative flex items-center justify-center py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-wood-border"></div>
                    </div>
                    <span className="relative bg-white px-4 font-mono text-[9px] text-wood-muted uppercase tracking-widest font-bold">
                      Or Submit via Google Forms
                    </span>
                  </div>

                  <div className="text-center">
                    <a
                      href={STUDIO_INFO.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 font-mono text-xs text-wood-sand font-bold hover:underline"
                      id="google-form-external-link"
                    >
                      <span>Open Google Forms Contact Form</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
