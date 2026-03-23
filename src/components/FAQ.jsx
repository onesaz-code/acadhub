import React from "react";
import { Typography, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@onesaz/ui";

const FAQ = () => {
  const faqs = [
    {
      question: "Why do educational institutes need an LMS?",
      answer: "An LMS (Learning Management System) is essential for modern educational institutes as it provides a centralized platform for delivering content, managing courses, tracking student progress, and facilitating online learning. It enables institutions to scale their educational offerings, provide flexible learning options, and improve student engagement through interactive content and real-time feedback."
    },
    {
      question: "What are the key features of an LMS?",
      answer: "Key LMS features include course management, content delivery, assessment tools, student tracking and analytics, communication tools, mobile accessibility, integration capabilities, reporting dashboards, and collaborative learning features. A robust LMS should also support multimedia content, automated grading, and personalized learning paths."
    },
    {
      question: "What is an ERP system in the context of educational institutes?",
      answer: "An Education ERP (Enterprise Resource Planning) system is a comprehensive software solution that integrates and manages all core administrative and academic processes of an educational institution. It streamlines operations including student admissions, fee management, attendance, examination management, HR and payroll, inventory, transportation, and financial accounting, providing a unified platform for efficient institutional management."
    },
    {
      question: "What are common modules of an ERP system?",
      answer: "Common ERP modules include: Student Information System, Admission Management, Fee Management, Attendance Tracking, Examination and Assessment, HR and Payroll, Finance and Accounting, Inventory Management, Transport Management, Library Management, Hostel Management, and Analytics & Reporting. These modules work together to create a seamless operational ecosystem."
    },
    {
      question: "How to ensure successful implementation of LMS or ERP?",
      answer: "Successful implementation requires: 1) Clear objectives and requirements analysis, 2) Stakeholder involvement and buy-in, 3) Comprehensive training for all users, 4) Phased rollout approach, 5) Data migration planning, 6) Ongoing technical support, 7) Regular feedback collection and system optimization, 8) Integration with existing systems, and 9) Continuous monitoring and improvement based on user needs and technological advancements."
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-lg">
            Find answers to common questions about our platform
          </Typography>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <Typography variant="h6" className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <Typography variant="body2" className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
