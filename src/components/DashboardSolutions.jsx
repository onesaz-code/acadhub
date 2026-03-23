import React, { useState } from 'react';
import { Typography, Button } from '@onesaz/ui';

const DashboardSolutions = () => {
  const [activeTab, setActiveTab] = useState('branch');

  const dashboardImages = {
    branch: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/chart.png',
    finance: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/fin.png',
    user: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/user.png',
    attendance: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/attn.png',
  };

  return (
    <div className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200 opacity-10 rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-pink-200 opacity-15 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Solutions that will Blow Your Mind
          </Typography>
          <Typography variant="body1" className="text-xl text-gray-600">
            Vital KPIs, Real-time Updates, Customizable Dashlets
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {['branch', 'finance', 'user', 'attendance'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'contained' : 'outline'}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium text-base capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 transform transition-all duration-500 hover:shadow-3xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={dashboardImages[activeTab]}
              alt={`${activeTab} dashboard`}
              className="w-full h-auto object-contain max-h-[70vh] transition-opacity duration-500"
              style={{ animation: 'fadeIn 0.5s ease-in-out' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DashboardSolutions;
