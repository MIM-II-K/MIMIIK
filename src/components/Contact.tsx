"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const SERVICE_ID = "service_tocpn2g";
const TEMPLATE_ID = "template_8xskp6o";
// This is your Public Key (a.k.a. user/public key in EmailJS)
const PUBLIC_KEY = "X3bEGf40wd0tCNWUo";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // must stay empty
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const contactInfo = [
    { icon: Mail, title: "Email", content: "ennzaen@gmail.com", href: "mailto:ennzaen@gmail.com" },
    { icon: Phone, title: "Phone", content: "+977 976-2533-455", href: "tel:+9779762533455" },
    { icon: MapPin, title: "Location", content: "Butwal, Nepal", href: "#" },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // simple anti-bot check
    if (form.honeypot) {
      setStatus({ type: "error", message: "Bot submission detected." });
      return;
    }

    try {
      setIsSubmitting(true);

      // IMPORTANT:
      // sendForm reads values by "name" attributes from the actual form DOM.
      // We also provide hidden fields for common EmailJS defaults: from_name, reply_to.
      if (!formRef.current) throw new Error("Form ref not found");

      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      // res.status === 200 is typical success
      // console.log("EmailJS success:", res);

      setStatus({ type: "success", message: "Message sent successfully! I’ll get back to you soon." });
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "", honeypot: "" });
      formRef.current.reset(); // ensure native form clears (hidden inputs too)
    } catch (err: any) {
      console.error("EmailJS Error:", err?.text || err);
      // Try to surface a helpful hint if common issues occur
      let msg = "Something went wrong. Please try again.";
      if (typeof err?.text === "string") {
        if (err.text.includes("The service ID is invalid")) msg = "EmailJS Service ID is invalid.";
        if (err.text.includes("The template ID is invalid")) msg = "EmailJS Template ID is invalid.";
        if (err.text.includes("User ID")) msg = "EmailJS Public Key (user ID) is invalid.";
        if (err.text.includes("origin")) msg = "Origin not allowed. Add your site to EmailJS Allowed Origins.";
        if (err.text.includes("required")) msg = "Missing required template variable. Check template field names.";
      }
      setStatus({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="gradient-card border-border animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>I&apos;ll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg text-sm ${
                    status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <form ref={formRef} onSubmit={onSubmit} className="space-y-6" noValidate>
                {/* Hidden fields for EmailJS defaults + honeypot */}
                <input
                  type="hidden"
                  name="from_name"
                  value={`${form.firstName} ${form.lastName}`.trim()}
                />
                <input type="hidden" name="reply_to" value={form.email} />
                <input type="text" name="honeypot" value={form.honeypot} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={onChange}
                      required
                      className="transition-smooth focus:shadow-neon"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={onChange}
                      required
                      className="transition-smooth focus:shadow-neon"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="transition-smooth focus:shadow-neon"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={onChange}
                    required
                    className="transition-smooth focus:shadow-neon"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    required
                    className="transition-smooth focus:shadow-neon resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group transition-smooth glow-hover"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, need technical consultation, or just want to say hello,
                I&apos;m always open to discussing new opportunities and innovative ideas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="gradient-card border-border transition-smooth glow-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-3 gradient-primary rounded-lg">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <a href={info.href} className="text-muted-foreground hover:text-neon transition-colors">
                          {info.content}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="gradient-card border-border animate-scale-in">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-neon">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, please reach out via phone or
                  mention &quot;URGENT&quot; in your email subject.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
