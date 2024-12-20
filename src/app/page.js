"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Shield, 
  FileText, 
  Share2, 
  BarChart3,
  Code,
  Database,
  Lock,
  Sparkles,
  Check,
  Github,
} from 'lucide-react';
import Link from 'next/link';







const Section = ({ children, className = "" }) => (
  <section className={`py-20 px-6 ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

const hoverScale = {
  hover: { 
    scale: 1,
    transition: { duration: 0.3 }
  }
};




const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
  animate={{ 
    y: [0, -10, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    delay,
    ease: "easeInOut"
  }}
  >
    {children}
  </motion.div>
);


export default function FormLabLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/95 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <OpenSource />
        <Features />
        <TechnologyStack />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
// Section title component for consistent heading styling
const SectionTitle = ({ children }) => (
  <motion.h2 
    className="text-4xl font-bold text-center mb-12"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text text-transparent">
      {children}
    </span>
  </motion.h2>
);

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            FormLab
          </span>
          <a href="https://github.com/Vyas106/FormLab">
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
            Open Source
          </Badge>
          </a>
        </div>

        <div className="flex items-center gap-4">
        <a href="https://github.com/Vyas106/FormLab">
          <Button variant="ghost" className="text-white hover:bg-white ">
            <Github className="w-5 h-5 mr-2" />
            Star on GitHub
          </Button>
          </a>
          <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:opacity-90">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Badge variant="outline" className="mb-8 bg-purple-500/10 text-purple-400 border-purple-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            100% Free and Open Source Forever
          </Badge>
          
          <FloatingElement>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
                Professional Forms.
              </span>
              <br />
              <span className="text-white">
                Zero Cost.
              </span>
            </h1>
          </FloatingElement>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Create beautiful, powerful forms with our open-source platform.
            No hidden fees, no limitations, just pure form-building freedom.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="https://my-form-lab-by-vyas-vishal.vercel.app/">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-6 text-lg rounded-full hover:opacity-90">
              Start Building Forms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <a href="https://github.com/VyasVishal-IO/MyFormLab">
            <Button variant="outline" className="text-white border-whit bg-black px-8 py-6 text-lg rounded-full hover:bg-white">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              "No credit card required",
              "Self-hosted option available",
              "MIT License"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-purple-400" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function OpenSource() {
  return (
    <Section className="bg-purple-900/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Why Open Source?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We believe form creation should be accessible to everyone. Our open-source approach means
            complete transparency, community-driven development, and the freedom to modify and self-host.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Transparent",
                description: "100% open codebase with no hidden functionality"
              },
              {
                title: "Community-Driven",
                description: "Shaped by developers and users like you"
              },
              {
                title: "Extensible",
                description: "Customize and extend to match your needs"
              }
            ].map((item) => (
              <Card key={item.title} className="bg-black/50 border border-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// [Previous Features, TechnologyStack, FAQ components remain the same]

function Features() {
  const features = [
    {
      title: "Seamless Form Creation",
      description: "Create professional forms with our intuitive drag-and-drop interface.",
      icon: FileText
    },
    {
      title: "Authentication & Security",
      description: "Enterprise-grade security with advanced authentication options.",
      icon: Shield
    },
    {
      title: "Dashboard for Data Management",
      description: "Powerful analytics and data management tools at your fingertips.",
      icon: BarChart3
    },
    {
      title: "Sharable Form Links",
      description: "Share your forms instantly with customizable access controls.",
      icon: Share2
    }
  ];

  return (
    <Section>
      <SectionTitle>Why Choose FormLab?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Card className="bg-black/50 border border-white/10 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={hoverScale.hover}
              >
                <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TechnologyStack() {
  const technologies = [
    { name: "Next.js", icon: Code, role: "Frontend Framework" },
    { name: "Prisma", icon: Database, role: "ORM" },
    { name: "PostgreSQL", icon: Database, role: "Database" },
    { name: "Auth", icon: Lock, role: "Authentication" }
  ];

  return (
    <Section className="bg-purple-900/10">
      <SectionTitle>Powered by Modern Tech</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Card className="bg-black/50 border border-white/10 p-6 text-center backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <motion.div
                whileHover={hoverScale.hover}
                className="flex flex-col items-center gap-4"
              >
                <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20">
                  <tech.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.role}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Why should I use FormLab?",
      answer: "FormLab provides an intuitive, secure, and powerful platform for creating and managing forms. With features like drag-and-drop building and advanced analytics, you can streamline your form creation process.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we implement enterprise-grade security measures and follow industry best practices to ensure your data is protected at all times.",
    },
    {
      question: "How can I get started?",
      answer: "Simply click the 'Get Started' button, create an account, and you can begin creating forms immediately with our user-friendly interface.",
    },
  ];

  return (
    <Section>
      <SectionTitle>Common Questions</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="border border-white/10 bg-black/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}



function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, a form solution that's both powerful and truly free. Game changer!",
      author: "Sarah Chen",
      role: "Frontend Developer"
    },
    {
      quote: "The ability to self-host and customize has made this our go-to form solution.",
      author: "Marcus Rodriguez",
      role: "Tech Lead"
    },
    {
      quote: "Beautiful UI, great documentation, and amazing community support.",
      author: "Jessica Kim",
      role: "Product Manager"
    }
  ];

  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Loved by Developers
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="bg-purple-900/10">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Badge variant="outline" className="mb-8 bg-purple-500/10 text-purple-400 border-purple-500/20">
          Get Started Today
        </Badge>
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Join the Open Source Form Revolution
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Start creating beautiful forms today. No credit card, no commitments.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
           <a href="https://my-form-lab-by-vyas-vishal.vercel.app/">
                 <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-6 text-lg rounded-full hover:opacity-90 flex items-center">
                    Start Building
               <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <Button variant="outline" className="text-white bg-transparent border-white px-8 py-6 text-lg rounded-full hover:bg-white">
            View Documentation
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
              FormLab
            </span>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              Open Source
            </Badge>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FormLab. Open source under Vishal Vyas.
          </p>
        </div>
      </div>
    </footer>
  );
}