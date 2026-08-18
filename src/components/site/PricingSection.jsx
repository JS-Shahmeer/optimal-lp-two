import React from "react";

const packages = [
  {
    name: (
      <>
        Basic Website
        <br />
        Package
      </>
    ),
    price: "199",
    oldPrice: "247",
    description:
      "Perfect for startups, personal brands and small businesses looking for a professional online presence.",
    features: [
      "1–3 Page Website Design",
      "Modern & Professional UI Design",
      "Fully Mobile Responsive",
      "HTML / React / Next.js Development",
      "Contact / Inquiry Form",
      "WhatsApp Integration",
      "Social Media Integration",
      "Google Maps Integration",
      "Basic On-Page SEO",
      "SEO-Friendly URL Structure",
      "Meta Title & Meta Description",
      "Image Optimization",
      "Fast Loading Optimization",
      "Cross-Browser Compatible",
      "SSL / HTTPS Ready",
      "Google Analytics Integration",
      "Google Search Console Setup",
      // "Basic Security Setup",
      "2 Banner / Hero Designs",
      "3 Revisions",
      "Complete Source Files",
      "Website Deployment",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "No Monthly / Hidden Fees",
    ],
  },

  {
    name: (
      <>
        Business Website
        <br />
        Package
      </>
    ),
    price: "277",
    oldPrice: "477",
    description:
      "For growing businesses that need a stronger website with more pages and marketing functionality.",
    features: [
      "3–5 Page Website Design",
      "Custom Modern UI/UX",
      "Fully Mobile Responsive",
      "HTML / React / Next.js / WordPress",
      "Interactive Hover Effects",
      "Animated Sections",
      "Custom Hero Section",
      "Up to 3 Banner Designs",
      "Contact / Inquiry Forms",
      "WhatsApp Business Integration",
      "Google Maps Integration",
      "Social Media Integration",
      "Newsletter / Lead Capture Form",
      "Google Analytics Integration",
      "Google Search Console",
      "Basic Technical SEO",
      "On-Page SEO",
      "SEO-Friendly Structure",
      "Image & Performance Optimization",
      "Speed Optimization",
      "Basic Schema Markup",
      "Open Graph / Social Sharing",
      "Favicon & Website Branding",
      "5 Professional Email IDs",
      "6 Revisions",
      "SSL / HTTPS Configuration",
      "Cross-Browser Testing",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "No Monthly / Hidden Fees",
    ],
  },

  {
    name: (
      <>
        Professional Website
        <br />
        Package
      </>
    ),
    price: "677",
    oldPrice: "1477",
    description:
      "For established businesses that need a premium, conversion-focused website.",
    features: [
      "Up to 8 Pages Website Design",
      "Premium Custom UI/UX",
      "Fully Responsive Design",
      "React / Next.js / WordPress Development",
      "Custom Interactive Design",
      "Advanced Animations",
      "Scroll-Based Animations",
      "Interactive Hero Sections",
      "Up to 5 Banner / Creative Designs",
      "Content Management System",
      "Blog / News Section",
      "Advanced Contact Forms",
      "Lead Generation Forms",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Social Media Integration",
      "Newsletter Integration",
      "Google Analytics 4",
      "Google Search Console",
      "Advanced On-Page SEO",
      "Technical SEO Setup",
      "Schema Markup",
      "XML Sitemap",
      "Robots.txt Configuration",
      "Open Graph / Social Meta",
      "Image Compression & Optimization",
      "Core Web Vitals Optimization",
      "Website Speed Optimization",
      "Mobile Performance Optimization",
      // "Security Hardening",
      "SSL / HTTPS",
      "Backup Configuration",
      "Google Business Profile Integration",
      "8 Professional Email IDs",
      "Unlimited Revisions",
      "Cross-Browser Testing",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "No Monthly / Hidden Fees",
    ],
  },

  {
    name: (
      <>
        Premium Website
        <br />
        Package
      </>
    ),
    price: "1277",
    oldPrice: "2577",
    description:
      "For companies and brands requiring a high-end custom digital presence.",
    features: [
      "Unique 10 Pages Website Design",
      "Premium Custom UI/UX",
      "Fully Custom Development",
      "React / Next.js / WordPress / PHP",
      "High-End Interactive Design",
      "Advanced GSAP / Framer Motion Animations",
      "Scroll-Based Animations",
      "Micro-Interactions",
      "Custom Page Transitions",
      "Advanced Responsive Design",
      "Custom Dynamic Components",
      "Advanced CMS",
      "Blog / Resources System",
      "Advanced Lead Generation System",
      "Multi-Step Forms",
      "WhatsApp / Live Chat Integration",
      "Google Maps Integration",
      "Social Media Integration",
      "Newsletter Integration",
      "Booking / Appointment Integration",
      "Payment Gateway Integration",
      "Third-Party API Integration",
      "Google Analytics 4",
      "Google Search Console",
      "Advanced Technical SEO",
      "Advanced On-Page SEO",
      "Schema Markup",
      "XML Sitemap",
      "Robots.txt",
      "Canonical URL Setup",
      "Open Graph / Social Sharing",
      "Core Web Vitals Optimization",
      "Advanced Page Speed Optimization",
      "Image / Asset Optimization",
      // "Security Hardening",
      "SSL / HTTPS",
      "Backup Setup",
      "Analytics & Conversion Tracking",
      "Google Business Profile Integration",
      "10 Professional Email IDs",
      "Unlimited Revisions",
      "Cross-Browser & Device Testing",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "No Monthly / Hidden Fees",
    ],
  },
];

function PricingCard({ item }) {
  const handleConsultClick = () => {
    const element = document.getElementById("consult");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full rounded-[15px] bg-[#f5f5f5] p-[10px] transition-all duration-300 shadow-[0_4px_5px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_20px_rgba(255,116,24,0.35)]">
      <div className="flex h-full min-h-[520px] flex-col rounded-[5px] bg-white px-4 sm:px-5 md:px-4 lg:px-6 pt-5 sm:pt-6 lg:pt-7">

        {/* Header + Price */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="text-[16px] sm:text-[17px] lg:text-[19px] font-bold leading-[1.15] text-[#111111]">
              {item.name}
            </h3>
          </div>
          

          <div className="shrink-0 text-right sm:text-right">
            <div className="flex items-start justify-end text-[#ff7418]">
              <span className="mt-[8px] sm:mt-[10px] text-[16px] sm:text-[17px] lg:text-[18px] font-medium">$</span>

              <span className="text-[36px] sm:text-[40px] lg:text-[43px] font-extrabold leading-none">
                {item.price}
              </span>
            </div>

            <div className="-mt-1 whitespace-nowrap text-[14px] sm:text-[15px] lg:text-[16px] text-[#111]">
              <span className="line-through">
                ${item.oldPrice}
              </span>{" "}
              <span className="text-[12px] sm:text-[13px] lg:text-[14px]">Only</span>
            </div>
          </div>
        </div>
        <p className="mt-4 sm:mt-5 lg:mt-6 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.45] text-[#999999]">
            {item.description}
          </p>

        {/* Features */}
        <div className="mt-5 sm:mt-6 lg:mt-7 min-h-0 flex-1">
          <div className="h-[180px] sm:h-[190px] md:h-[200px] lg:h-[205px] overflow-y-auto pr-2 sm:pr-3 custom-scrollbar">
            <ul className="space-y-[6px] sm:space-y-[7px]">
              {item.features.map((feature, index) => {
                const isHeading = feature === "Value Added Services";

                return (
                  <li
                    key={index}
                    className={`relative pl-[15px] text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.35] ${isHeading
                        ? "mt-2 font-medium"
                        : "font-normal text-[#111]"
                      }`}
                  >
                    <span className="absolute left-0 top-[5px] h-0 w-0 border-b-[5px] border-l-[6px] border-t-[5px] border-b-transparent border-t-transparent border-l-[#ffb21a]" />

                    {isHeading ? `– ${feature}` : feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Consultation */}
        <button 
          onClick={handleConsultClick}
          className="cursor-pointer -mx-4 sm:-mx-5 md:-mx-4 lg:-mx-6 mt-3 sm:mt-4 lg:mt-4 flex h-[32px] sm:h-[34px] lg:h-[36px] items-center justify-center bg-[#19506d] text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-white transition-all duration-300 hover:bg-[#1a5a7d]"
        >
          Get Free Consultation!
        </button>

        {/* Start Project */}
        <div className="flex justify-center py-3 sm:py-4 lg:py-5">
          <button
            type="button"
            onClick={handleConsultClick}
            className="cursor-pointer h-[44px] sm:h-[46px] lg:h-[49px] w-[220px] sm:w-[230px] lg:w-[245px] rounded-[4px] bg-[#ff7418] text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-white transition-all duration-300 hover:bg-[#ed6307] hover:shadow-lg"
          >
            Start Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-3 sm:px-4 md:px-5 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-[55px]">

      {/* Decorative top-left circle */}
      <div className="pointer-events-none absolute -left-[90px] -top-[80px] h-[180px] w-[180px] rounded-full border-[3px] border-[#ff7418]" />

      {/* Decorative top-right dashed circle */}
      <div className="pointer-events-none absolute -right-[85px] -top-[100px] h-[190px] w-[190px] rounded-full border-[3px] border-dashed border-[#ff7418]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-[900px] text-center">

          <h2 className="relative inline-block text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#030316]">

            Pricing Packages
            <br />
            Competitive &amp; Reasonable
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 lg:mt-6 max-w-[850px] text-[15px] sm:text-[16px] leading-[1.5] text-[#66666f] mb-8 sm:mb-10 md:mb-12 lg:mb-[60px]">
            Optimal IT Solutions understands that digital design and marketing
            services often don’t come cheap. That is why we have devised
            multiple pricing packages so that there is something for everyone.
          </p>
        </div>

        {/* Pricing Cards */}
        <div id="pricing" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-4">
          {packages.map((item, index) => (
            <PricingCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}