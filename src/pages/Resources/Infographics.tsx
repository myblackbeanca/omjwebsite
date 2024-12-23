import React from 'react';
import PageHero from '../../components/PageHero';
import { Image as ImageIcon, Download } from 'lucide-react';

const Infographics = () => {
  const infographics = [
    {
      title: "Understanding TMJ Disorders",
      description: "A comprehensive guide to TMJ symptoms, causes, and treatments.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "TMJ Treatment Options",
      description: "Explore various treatment approaches for TMJ disorders.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Infographics"
        subtitle="Visual guides to understanding TMJ"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <ImageIcon className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <h2 className="text-3xl font-sigmar text-bubblegum mb-4">Educational Infographics</h2>
          <p className="text-lg text-charcoal">
            Download and share these informative visual guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {infographics.map((infographic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={infographic.image}
                alt={infographic.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{infographic.title}</h3>
                <p className="text-gray-600 mb-4">{infographic.description}</p>
                <button className="flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors">
                  <Download className="w-5 h-5 mr-2" /> Download Infographic
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infographics;