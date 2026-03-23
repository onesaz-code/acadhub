import React from "react";
import { Typography, Card, CardContent, Badge } from "@onesaz/ui";
import { BookOpen, Video, Award, MessageSquare, FileCheck, Users2 } from "lucide-react";

const LMS = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create, organize, and deliver engaging courses with ease",
      badge: "Popular",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Video,
      title: "Live Classes",
      description: "Conduct interactive live sessions with virtual classrooms",
      badge: "New",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileCheck,
      title: "Assignments & Tests",
      description: "Automated grading and comprehensive assessment tools",
      badge: null,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Issue digital certificates and track achievements",
      badge: null,
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Foster collaboration with integrated discussion boards",
      badge: null,
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users2,
      title: "Learning Analytics",
      description: "Track progress and measure learning outcomes",
      badge: "Featured",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="LMS" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="caption" className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
            Learning Management System
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Advanced LMS Platform
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg max-w-3xl mx-auto">
            Deliver exceptional learning experiences with our feature-rich LMS designed for modern education
          </Typography>
        </div>

        {/* Main Feature Card */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white space-y-6">
              <Typography variant="h3" className="font-extrabold text-white">
                Transform Your Teaching Experience
              </Typography>
              <Typography variant="body1" className="text-white/90 leading-relaxed">
                Our LMS empowers educators to create engaging content, track student progress, and deliver personalized learning experiences at scale.
              </Typography>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">24/7 Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Mobile Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Cloud Based</span>
                </div>
              </div>
              {/* <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Explore Features
              </button> */}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center">
                <Video className="text-white" size={64} />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <Typography variant="h6" className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
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

export default LMS;
