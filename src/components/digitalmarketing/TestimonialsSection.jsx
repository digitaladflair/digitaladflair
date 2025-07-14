'use client';
import React from 'react';

export const TestimonialsSection = ({ title, items }) => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
            <div className="font-semibold text-orange-600">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.business}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
