import React from "react";
import { Card, CardContent, Typography, Avatar } from "@onesaz/ui";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajiv Bhupathi",
      role: "Student",
      image: "https://ui-avatars.com/api/?name=Rajiv+Bhupathi&background=3B82F6&color=fff",
      text: "User-friendly interface with robust features that make learning so much easier. The platform is intuitive and helps me stay organized."
    },
    {
      name: "CH.Sri Charan",
      role: "Faculty",
      image: "https://ui-avatars.com/api/?name=Sri+Charan&background=8B5CF6&color=fff",
      text: "Robust security and fair exam assessment tools. The analytics help me understand my students better and provide targeted support."
    },
    {
      name: "Kommalapati Harsha",
      role: "Student",
      image: "https://ui-avatars.com/api/?name=Kommalapati+Harsha&background=10B981&color=fff",
      text: "Exam flexibility and study on the go features are amazing. I can prepare for tests anytime, anywhere with the mobile app."
    },
    {
      name: "Suwarna Minmulwar",
      role: "Parent",
      image: "https://ui-avatars.com/api/?name=Suwarna+Minmulwar&background=F59E0B&color=fff",
      text: "Performance comparison and time analysis features give me complete visibility into my child's progress and areas for improvement."
    },
    {
      name: "Rakesh Naidu Gandi",
      role: "Teacher",
      image: "https://ui-avatars.com/api/?name=Rakesh+Naidu&background=EF4444&color=fff",
      text: "In-depth analysis tools for teachers are exceptional. The detailed reports help me tailor my teaching approach for each student."
    },
    {
      name: "Swathi",
      role: "Student",
      image: "https://ui-avatars.com/api/?name=Swathi&background=06B6D4&color=fff",
      text: "Excellent app for exams! The interface is clean, the features are comprehensive, and it's helped me improve my test scores significantly."
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="caption" className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
            TESTIMONIALS
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What our customers are saying
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg max-w-3xl mx-auto">
            Vital KPI's, Real-time updates, Customisable dashlets
          </Typography>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="text-blue-600 opacity-20" size={48} />
                </div>

                {/* Testimonial Text */}
                <Typography variant="body2" className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </Typography>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <Avatar src={testimonial.image} alt={testimonial.name} className="w-12 h-12" />
                  <div>
                    <Typography variant="body2" className="font-bold text-gray-900">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      {testimonial.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
