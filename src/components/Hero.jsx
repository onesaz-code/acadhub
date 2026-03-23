import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  TextField,
} from "@onesaz/ui";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleDemoRequest = () => {
    setDemoDialogOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Close demo dialog and open success dialog
    setDemoDialogOpen(false);
    setSuccessDialogOpen(true);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    });
  };

  const clients = [
    "https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c1.png",
    "https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c2.png",
    "https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c3.png",
    "https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c4.png",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-950 via-purple-800 to-purple-700 py-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="flex items-center justify-center -mt-5">
         <img
            src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/onesquare.png"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <Typography variant="body2" className="text-white font-medium">
                Next-Gen Education Platform
              </Typography>
            </div>

            {/* Title */}
            <Typography
              variant="h1"
              className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight"
            >
              Transform Education Management with{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                AcadHub
              </span>{" "}
              ERP Solutions
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Empower educational institutions with cutting-edge ERP solutions tailored for modern learning environments
            </Typography>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {/* <Button
                size="lg"
                onClick={handleGetStarted}
                endIcon={<ArrowRight size={20} />}
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started Free
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleDemoRequest}
                startIcon={<Play size={20} />}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                Request Watch Demo
              </Button>
            </div>

            {/* Video Section */}
            {/* <div className="pt-12 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1066129285?h=15169d175d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute top-0 left-0 w-full h-full"
                    title="AcadHub Demo"
                  ></iframe>
                </div>
              </div>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Institutions" },
                { number: "1M+", label: "Students" },
                { number: "50K+", label: "Teachers" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <Typography variant="h2" className="text-white font-extrabold text-3xl md:text-4xl">
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" className="text-white/80 mt-2">
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-8 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Typography variant="body2" className="text-center text-gray-600 font-medium">
            Trusted by leading educational institutions
          </Typography>
        </div>
        <div className="relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
          <div className="flex animate-scroll">
            {/* Duplicate the array to create seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <img
                key={index}
                src={client}
                alt={`Client ${(index % clients.length) + 1}`}
                className="h-16 md:h-20 mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Dialog */}
      <Dialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen}>
        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Request a Demo</DialogTitle>
            <DialogDescription>
              Fill in your details and our team will reach out to schedule a personalized demo
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleFormChange}
              required
              placeholder="Enter your full name"
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              placeholder="your.email@example.com"
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleFormChange}
              required
              placeholder="+91 XXXXX XXXXX"
            />
            <TextField
              label="Organization Name"
              name="organization"
              value={formData.organization}
              onChange={handleFormChange}
              required
              placeholder="Your school/institution name"
            />
            <TextField
              label="Message (Optional)"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              multiline
              rows={3}
              placeholder="Any specific requirements or questions?"
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outlined"
                onClick={() => setDemoDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent size="md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              Request Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-center text-base mt-2">
              Thank you for your interest in AcadHub. One of our product specialists will
              reach out to you within 24 hours to schedule a personalized demo at your
              convenience.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-4">
            <Button onClick={() => setSuccessDialogOpen(false)} className="w-full sm:w-auto">
              Got it, Thanks!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
