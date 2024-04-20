// components/atomic/Feature.js
import React from 'react';

export const Feature = ({ title, description, icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        {icon}
        <h2 className="ml-2 text-xl font-semibold text-green-700">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

