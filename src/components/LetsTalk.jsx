import React, { useState } from "react";
import { Typography, TextField, Button, Card, CardContent } from "@onesaz/ui";
import { Send, MapPin } from "lucide-react";

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          >
            Let's Talk
          </Typography>
          <Typography
            variant="body1"
            className="text-lg md:text-xl text-gray-600"
          >
            If you have any questions about the product or are confused about
            which plan to select, contact us.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-sm bg-transparent transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8">
              <Typography
                variant="h4"
                className="text-3xl font-semibold text-blue-600 text-center mb-2"
              >
                Contact Us
              </Typography>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-8 rounded-full opacity-70"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-blue-50/30"
                    required
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-blue-50/30"
                    required
                  />
                </div>

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-blue-50/30 w-full"
                  required
                />

                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  className="bg-blue-50/30 w-full"
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send size={18} />}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card className="shadow-sm bg-transparent transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-blue-600" size={28} />
                <Typography
                  variant="h5"
                  className="text-2xl font-semibold text-blue-600"
                >
                  Find us at the office
                </Typography>
              </div>

              <Typography
                variant="body2"
                className="text-gray-600 text-lg mb-6 leading-relaxed"
              >
                Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP
                Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
              </Typography>

              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[300px] lg:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d237.88726679381924!2d78.3867054!3d17.4503177!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI3JzAxLjMiTiA3OMKwMjMnMTIuMSJF!5e0!3m2!1sen!2sin!4v1774261862206!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
