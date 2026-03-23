import React from "react";
import { Card, CardContent, Typography, Badge } from "@onesaz/ui";
import { Settings, Shield, Camera, TrendingUp, School, BookOpen } from "lucide-react";

const Best = () => {
  const features = [
    {
      icon: Settings,
      title: "Customized Applications",
      description: "Tech-savvy team listens to your needs, delivering fast, tailored solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "4 Layer Security",
      description: "Data guarded by 4 layers of protection, hack-free environment. Notified when data is edited/damaged",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Camera,
      title: "OMR Scan Analysis",
      description: "Scan any OMR sheet with mobile camera. Instant comprehensive analysis with 14 detailed insights",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Adaptive Learning",
      description: "System leverages advanced algorithms to analyze individual student performance and preferences",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: School,
      title: "School Operating System",
      description: "ERP solution integrates all aspects of education management into a unified platform",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Best Content",
      description: "300,000+ questions in question bank, subject-wise, topics, and subtopics organized",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose AcadHub?
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the powerful features that make us the leading choice for educational institutions
          </Typography>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
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
      </div>
    </section>
  );
};

export default Best;
