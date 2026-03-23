import React from "react";
import { Typography } from "@onesaz/ui";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "ERP System", href: "#ERP" },
      { name: "LMS Platform", href: "#LMS" },
      { name: "Modules", href: "#MODULES" },
      { name: "Pricing", href: "/pricing" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Brand Column - Full Width on Mobile, Centered */}
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">A</span>
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AcadHub
            </span>
          </div>
          <Typography
            variant="body2"
            className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm max-w-2xl mx-auto lg:mx-0"
          >
            Transforming education management with innovative ERP and LMS
            solutions designed for modern institutions.
          </Typography>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
              <Mail
                size={16}
                className="sm:w-[18px] sm:h-[18px] flex-shrink-0"
              />
              <Typography variant="body2" className="text-xs sm:text-sm">
                info@acadhub.com
              </Typography>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
              <Phone
                size={16}
                className="sm:w-[18px] sm:h-[18px] flex-shrink-0"
              />
              <Typography variant="body2" className="text-xs sm:text-sm">
                +91 9912340396
              </Typography>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
              <MapPin
                size={16}
                className="sm:w-[18px] sm:h-[18px] flex-shrink-0"
              />
              <Typography variant="body2" className="text-xs sm:text-sm">
                Hyderabad, India
              </Typography>
            </div>
          </div>
        </div>

        {/* Links Grid - 3 columns on mobile, side by side */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-3xl mx-auto lg:max-w-none">
          {/* Product Links */}
          <div className="text-center lg:text-left">
            <Typography
              variant="h6"
              className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
            >
              Product
            </Typography>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center lg:text-left">
            <Typography
              variant="h6"
              className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
            >
              Company
            </Typography>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/")) {
                        e.preventDefault();
                        navigate(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center lg:text-left">
            <Typography
              variant="h6"
              className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
            >
              Legal
            </Typography>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("/")) {
                        e.preventDefault();
                        navigate(link.href);
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <Typography
              variant="body2"
              className="text-gray-400 text-xs sm:text-sm text-center md:text-left"
            >
              © {currentYear} AcadHub. All rights reserved.
            </Typography>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
