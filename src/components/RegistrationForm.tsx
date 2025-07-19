import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Building, FileText } from 'lucide-react';
import { sriLankanDistricts } from '../data/services';

interface RegistrationFormProps {
  role: string;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ role, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    district: '',
    businessName: '',
    businessType: '',
    experience: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      role
    });
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'service_consumer':
        return 'Service Consumer';
      case 'vehicle_owner':
        return 'Vehicle Owner';
      case 'material_supplier':
        return 'Material Supplier';
      default:
        return 'User';
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case 'service_consumer':
        return 'blue';
      case 'vehicle_owner':
        return 'yellow';
      case 'material_supplier':
        return 'green';
      default:
        return 'blue';
    }
  };

  const color = getRoleColor();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${
            color === 'blue' ? 'from-blue-600 to-blue-700' :
            color === 'yellow' ? 'from-yellow-400 to-yellow-500' :
            'from-green-600 to-green-700'
          } p-8`}>
            <button
              onClick={onBack}
              className={`flex items-center ${
                color === 'yellow' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'
              } transition-colors mb-6`}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Role Selection
            </button>
            <h1 className={`text-4xl font-bold ${color === 'yellow' ? 'text-black' : 'text-white'} mb-2`}>
              Register as {getRoleTitle()}
            </h1>
            <p className={`text-xl ${
              color === 'yellow' ? 'text-black' : color === 'blue' ? 'text-blue-100' : 'text-green-100'
            }`}>
              Fill in your details to join our platform
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <User size={16} className="mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Mail size={16} className="mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <Phone size={16} className="mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+94 76 1098385"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <MapPin size={16} className="mr-2" />
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Select District</option>
                    {sriLankanDistricts.map((district) => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                  <MapPin size={16} className="mr-2" />
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Your complete address"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>

            {/* Business Information (for providers) */}
            {(role === 'vehicle_owner' || role === 'material_supplier') && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Building size={16} className="mr-2" />
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your business name"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <FileText size={16} className="mr-2" />
                      {role === 'vehicle_owner' ? 'Vehicle Types' : 'Material Types'} *
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      placeholder={role === 'vehicle_owner' ? 'JCB, Excavator, Lorry' : 'Sand, Gravel, Bricks'}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Building size={16} className="mr-2" />
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      min="0"
                      placeholder="Years in business"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <FileText size={16} className="mr-2" />
                    Business Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your business, services, and what makes you unique..."
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className={`w-full bg-gradient-to-r ${
                  color === 'blue' ? 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                  color === 'yellow' ? 'from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black' :
                  'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                } ${color !== 'yellow' ? 'text-white' : ''} py-4 px-6 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl`}
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};