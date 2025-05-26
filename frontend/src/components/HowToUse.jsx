import React from "react";

const HowToUse = () => {
  return (
    <div className=" shadow rounded-lg max-w-3xl mx-auto m-12 overflow-hidden bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-6 sm:p-8">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-4">
          How to Use
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Subnet Calculator
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Enter an IP address (e.g., 192.168.1.0)</li>
            <li>
              Enter a subnet mask (e.g., 255.255.255.0) or prefix length (e.g.,
              24)
            </li>
            <li>Click "Calculate" to see all subnet information</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Subnetting Calculator
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Enter a network address with prefix (e.g., 192.168.1.0/24)</li>
            <li>
              Enter the new prefix length (must be larger than original, e.g.,
              26)
            </li>
            <li>Click "Calculate Subnetting" to see all created subnets</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
