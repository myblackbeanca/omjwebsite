import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Download } from 'lucide-react';
import PageHero from '../../components/PageHero';

const Guides = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const guides = [
    {
      title: "TMJ Guide to Eating Out",
      description: "Navigate restaurants and social dining with TMJ-friendly tips. Learn what to order, how to modify dishes, and enjoy dining out without jaw pain.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/eating-out"
    },
    {
      title: "TMJ Guide to Flying",
      description: "Essential tips for air travel with TMJ: managing pressure changes, packing comfort items, and making your journey easier.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/flying"
    },
    {
      title: "TMJ Guide to Dating",
      description: "Navigate dating and relationships with TMJ: from communication tips to planning jaw-friendly dates.",
      image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/dating"
    },
    {
      title: "TMJ Guide to Parenting",
      description: "Essential strategies for managing TMJ while raising children, from pregnancy to daily parenting challenges.",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/parenting"
    }
  ];

  const handleDownload = (guideTitle: string) => {
    setSelectedGuide(guideTitle);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '' });
    
    // Find the guide and redirect to its page
    const guide = guides.find(g => g.title === selectedGuide);
    if (guide) {
      window.location.href = guide.path;
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Survival Guide Hub"
        subtitle="Essential guides for navigating life with TMJ"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Book className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <h2 className="text-3xl font-sigmar text-bubblegum mb-4">TMJ Life Guides</h2>
          <p className="text-lg text-charcoal">
            Practical guides to help you navigate daily life with TMJ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <button
                  onClick={() => handleDownload(guide.title)}
                  className="flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" /> Access Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-sigmar text-bubblegum mb-6">Access {selectedGuide}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-charcoal mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-charcoal mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-charcoal hover:text-bubblegum"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-bubblegum text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Access Guide
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;