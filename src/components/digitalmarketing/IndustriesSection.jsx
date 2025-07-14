'use client';
import React from 'react';

export const IndustriesSection = ({ title, sectors }) => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <div key={index} className="bg-orange-100 p-4 rounded-xl text-center font-medium text-gray-800 shadow-sm">
            {sector}
          </div>
        ))}
      </div>
    </section>
  );
};
