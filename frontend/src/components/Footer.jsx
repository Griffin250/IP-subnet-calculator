import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="containerr mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">
              IP Subnet Calculator
            </h3>
            <p className="text-gray-400 mt-1">A network engineering tool</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 mb-2">
              Built with ❤️ by{" "}
              <span className="text-blue-300 font-medium">Griffintechs</span>
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="##"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} IP Subnet Calculator. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
