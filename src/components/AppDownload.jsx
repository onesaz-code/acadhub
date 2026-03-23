import React from 'react';
import { Typography } from '@onesaz/ui';

const AppDownload = () => {
  return (
    <div className="relative md:px-8 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enjoy a seamless experience with our
          </Typography>
          <Typography variant="h2" className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-6">
            Simplified app
          </Typography>
          {/* <Typography variant="body1" className="text-xl md:text-2xl text-gray-700 font-medium">
            Watch the live classes anytime and anywhere
          </Typography> */}
        </div>

        {/* Laptop/Mobile Mockup */}
        {/* <div className="relative flex justify-center items-center my-12">
          <img
            src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/lapmob.png"
            alt="App on Laptop and Mobile"
            className="w-full max-w-4xl h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div> */}

        {/* App Store Badges */}
        {/* <div className="flex justify-center items-center gap-6 flex-wrap mt-8">
          <a 
            href="https://play.google.com/store/apps/developer?id=onesaz+developer&hl=en_IN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <img
              src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/android.png"
              alt="Get it on Google Play"
              className="h-14 md:h-16 w-auto"
            />
          </a>
          <a 
            href="https://apps.apple.com/in/developer/onesaz/id1713076053" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-300"
          >
            <img
              src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/apple.png"
              alt="Download on the App Store"
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default AppDownload;
