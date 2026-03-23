import React from "react";
import { Typography, Card, CardContent } from "@onesaz/ui";
import { Users, GraduationCap, BarChart3, FileText, Calendar, DollarSign } from "lucide-react";

const ERP = () => {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student lifecycle management from admission to alumni",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Management",
      description: "Streamline courses, curricula, and academic operations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Real-time insights and comprehensive reporting dashboard",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Automated attendance with biometric and RFID integration",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Comprehensive billing, invoicing, and payment processing",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital document storage and verification system",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="ERP" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="caption" className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
            ERP System
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Complete ERP Solution
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg max-w-3xl mx-auto">
            Manage every aspect of your educational institution with our comprehensive ERP system designed for modern institutions
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-100"
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <Typography variant="h5" className="font-bold text-gray-900 mb-3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <Typography variant="h4" className="font-bold text-gray-900 mb-4">
              Ready to streamline your operations?
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6 max-w-2xl">
              Join hundreds of institutions already using AcadHub ERP to transform their management systems
            </Typography>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ERP;
