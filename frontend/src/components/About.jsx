import React from "react";

export const About = () => {
  return (
    <div className="shadow rounded-lg overflow-hidden min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-6 sm:p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About IPSC
        </h2>
        <p className="text-gray-600 mb-6">
          This application helps you calculate subnet information and perform
          subnetting operations. It provides detailed network information and
          allows you to divide networks into smaller subnets.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Subnet Calculator
            </h3>
            <p className="text-gray-700 mb-4">
              Calculate all subnet information from an IP address and subnet
              mask or prefix length.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Network address</li>
              <li>Broadcast address</li>
              <li>Usable host range</li>
              <li>Subnet mask</li>
              <li>Total hosts</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Subnetting Calculator
            </h3>
            <p className="text-gray-700 mb-4">
              Divide a network into smaller subnets by specifying a new prefix
              length.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Number of subnets</li>
              <li>Subnet addresses</li>
              <li>Hosts per subnet</li>
              <li>Address ranges</li>
              <li>Broadcast addresses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
