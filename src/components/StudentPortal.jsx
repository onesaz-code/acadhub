import React from "react";
import { Typography, Button, Card, CardContent } from "@onesaz/ui";

const StudentPortal = () => {
  return (
    <div className="relative py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-10 left-[10%] w-4 h-4 bg-cyan-400 rounded-full"></div>
      <div className="absolute bottom-[10%] right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="absolute top-[40%] left-2 w-3 h-3 bg-cyan-500 rounded-full"></div>
      <div className="absolute bottom-5 left-[30%] w-2 h-2 bg-blue-400 rounded-full"></div>
      <div className="absolute top-[80%] right-[20%] w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
      <div className="absolute top-[20%] right-[5%] w-3 h-3 bg-blue-500 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <Card className="shadow-2xl border-0 overflow-visible">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <Typography
                  variant="caption"
                  className="text-indigo-500 font-bold tracking-wider uppercase text-lg"
                >
                  STUDENT PORTAL
                </Typography>

                <Typography
                  variant="h2"
                  className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                >
                  Learning Beyond the Classroom{" "}
                  <span className="text-orange-500">✏️</span>
                </Typography>

                <Typography
                  variant="body1"
                  className="text-xl text-indigo-600 leading-relaxed"
                >
                  Easy access classes, tests, resources, and updates for
                  collaborative education. Elevate your learning journey now!
                </Typography>

                {/* <Button
                  variant="contained"
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Portal
                </Button> */}
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-purple-700 to-blue-600 rounded-3xl p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/learn.png"
                    alt="Student Portal Dashboard"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentPortal;
