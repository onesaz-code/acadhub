import React from "react";
import { Typography, Card, CardContent } from "@onesaz/ui";
import { 
  Smartphone, 
  Globe, 
  Shield, 
  Zap,
  Cloud,
  Lock,
  RefreshCw,
  HeadphonesIcon
} from "lucide-react";

const Modules = () => {
  const modules = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps for students, teachers, and parents",
      features: ["Offline access", "Push notifications", "Smart sync"]
    },
    {
      icon: Globe,
      title: "Parent Portal",
      description: "Keep parents engaged with real-time updates and insights",
      features: ["Progress tracking", "Fee payments", "Messaging"]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with compliance standards",
      features: ["Data encryption", "GDPR compliant", "Regular audits"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Reliable cloud hosting with automatic backups",
      features: ["99.9% uptime", "Auto scaling", "Daily backups"]
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamlessly connect with third-party tools and systems",
      features: ["REST API", "Webhooks", "Custom integrations"]
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support team always ready to help",
      features: ["Live chat", "Email support", "Knowledge base"]
    }
  ];

  return (
    <section id="MODULES" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography variant="caption" className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
            Platform Modules
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive modules and tools to power your entire educational ecosystem
          </Typography>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="text-blue-600" size={32} />
                  </div>

                  {/* Content */}
                  <Typography variant="h5" className="font-bold text-gray-900 mb-3">
                    {module.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-6">
                    {module.description}
                  </Typography>

                  {/* Features */}
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <Typography variant="caption" className="text-gray-600 text-sm">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <Typography variant="h3" className="font-extrabold text-white mb-4">
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" className="text-white/90 mb-8">
              Join thousands of educational institutions already using AcadHub to transform their operations
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Modules;
