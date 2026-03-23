import React, { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { TopBar, TopBarBrand, TopBarNav, TopBarNavItem, TopBarSection, Button } from "@onesaz/ui";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["ERP", "LMS", "MODULES"];

  const handleLoginClick = () => {
    window.location.href = "https://acadhub.com/sign-in";
  };

  const handleTryForFreeClick = () => {
    window.open(
      "https://wa.me/+919912340396?text=Hello!%20I%27m%20interested%20in%20AcadHub%20services.%20Can%20we%20get%20on%20a%20call%3F",
      "_blank"
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <TopBar className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
        <TopBarSection>
          <TopBarBrand className="cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-lg md:text-xl">A</span>
              </div>
              <span className="text-xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                AcadHub
              </span>
            </div>
          </TopBarBrand>
        </TopBarSection>

        <TopBarSection className="flex-1">
          <TopBarNav className="hidden md:flex items-center gap-8 justify-center">
            {navLinks.map((link) => (
              <TopBarNavItem key={link}>
                <ScrollLink
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-700 hover:text-blue-600 font-semibold text-lg cursor-pointer transition-all duration-300 hover:scale-110 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </ScrollLink>
              </TopBarNavItem>
            ))}
          </TopBarNav>
        </TopBarSection>

        <TopBarSection>
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleLoginClick}
              startIcon={<LogIn size={18} />}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6"
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={handleTryForFreeClick}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Try for Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </TopBarSection>
      </TopBar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          <div className="fixed top-[72px] right-0 bottom-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6 space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link}
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMobileMenu}
                    className="text-gray-700 hover:text-blue-600 font-semibold text-lg cursor-pointer transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  >
                    {link}
                  </ScrollLink>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <Button
                  variant="outline"
                  onClick={() => { handleLoginClick(); closeMobileMenu(); }}
                  startIcon={<LogIn size={18} />}
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  onClick={() => { handleTryForFreeClick(); closeMobileMenu(); }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                >
                  Try for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
