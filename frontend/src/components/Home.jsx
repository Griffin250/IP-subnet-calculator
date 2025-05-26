import React from "react";
import SubnetCalculator from "./SubnetCalculator";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            IP SUBNET CALCULATOR
          </h1>
          <p className="text-xl text-gray-600">
            A powerful tool for network engineers and IT professionals.
          </p>
        </div>
        <SubnetCalculator />
      </div>
    </div>
  );
};

export default Home;
