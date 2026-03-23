import { Typography, Card, CardContent } from "@onesaz/ui";
import { Mail, MapPin, Phone, Clock, MessageCircle, Users, Award } from "lucide-react";

const ContactUs = () => (
  <>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Typography variant="h2" className="font-bold mb-6">
        Contact Us
      </Typography>

      <Typography variant="body1" className="mb-8 text-gray-700 text-lg">
        We'd love to hear from you. Whether you're an institution looking for a
        complete digital solution or an educator looking to simplify your workflow—we're
        here to help.
      </Typography>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2">
                  Corporate Office
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony,
                  <br />
                  VIP Hills, Jaihind Enclave, Madhapur,
                  <br />
                  Hyderabad, Telangana 500081
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2">
                  Email
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  <a
                    href="mailto:support@acadhub.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@acadhub.com
                  </a>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2">
                  Phone
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  <a href="tel:+919912340396" className="text-blue-600 hover:underline">
                    +91 9912340396
                  </a>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-orange-600" size={24} />
              </div>
              <div>
                <Typography variant="h6" className="font-bold mb-2">
                  Business Hours
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Monday to Saturday
                  <br />
                  9:00 AM – 6:00 PM IST
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Other Ways to Reach Us */}
      <Typography variant="h4" className="font-bold mb-6 mt-12">
        Other Ways to Reach Us
      </Typography>

      <div className="space-y-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Support Portal
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Submit tickets via our online support portal for faster resolution.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-green-600" size={20} />
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Live Chat
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Chat with our support team during business hours on our website.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-purple-600" size={20} />
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Social Media
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Connect with us on LinkedIn, Twitter, and Facebook for updates and
                  support.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-600 font-bold">4</span>
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Feedback
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Share your feedback or suggestions to help us improve.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Partnerships
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  For business or partnership inquiries, email{" "}
                  <a
                    href="mailto:support@acadhub.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@acadhub.com
                  </a>
                  .
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 font-bold">6</span>
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Media
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  For press or media queries, contact{" "}
                  <a
                    href="mailto:support@acadhub.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@acadhub.com
                  </a>
                  .
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-pink-600" size={20} />
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Careers
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Interested in joining our team? Email{" "}
                  <a
                    href="mailto:support@acadhub.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@acadhub.com
                  </a>
                  .
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-teal-600" size={20} />
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Workshops & Training
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Request training or workshops for your institution.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-700 font-bold">⚡</span>
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Emergency Support
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  For urgent issues, mark your email as 'URGENT' in the subject line.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-cyan-600" size={20} />
              </div>
              <div>
                <Typography variant="body1" className="font-semibold mb-1">
                  Location Map
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Visit our website for a map and directions to our office.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
);

export default ContactUs;
