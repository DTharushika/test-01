import React from 'react';
import { ArrowLeft, Star, MapPin, Phone, MessageCircle, User, Award, Wrench, Shield, Clock } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleDetailsProps {
  vehicle: Vehicle;
  onBack: () => void;
}

export const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle, onBack }) => {
  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleMessage = (phone: string, supplierName: string, vehicleName: string) => {
    const message = `Hi ${supplierName}, I'm interested in renting your ${vehicleName}. Can you provide availability and rates?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-blue-200 transition-colors mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Vehicles
          </button>
          <h1 className="text-4xl font-bold text-white">{vehicle.name}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg mb-6"
              />
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Details</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{vehicle.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Wrench className="w-4 h-4 mr-2" />
                    Specifications:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {vehicle.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600">Hourly Rate</div>
                    <div className="text-2xl font-bold text-blue-600">Rs. {vehicle.pricePerHour.toLocaleString()}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600">Daily Rate</div>
                    <div className="text-2xl font-bold text-green-600">Rs. {vehicle.pricePerDay.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Vehicle Owner</h2>
                  <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-blue-500 fill-current mr-1" />
                    <span className="font-semibold text-blue-700">{vehicle.supplier.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{vehicle.supplier.name}</div>
                      <div className="text-sm text-gray-600">Vehicle Owner</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{vehicle.supplier.location}, {vehicle.supplier.district}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Contact Number</div>
                      <div className="text-gray-600">{vehicle.supplier.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Total Jobs</div>
                      <div className="text-gray-600">{vehicle.supplier.totalJobs} completed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Owner</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleCall(vehicle.supplier.phone)}
                    className="flex items-center justify-center bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-colors font-semibold shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </button>
                  <button
                    onClick={() => handleMessage(vehicle.supplier.phone, vehicle.supplier.name, vehicle.name)}
                    className="flex items-center justify-center bg-blue-500 text-white py-4 px-6 rounded-xl hover:bg-blue-600 transition-colors font-semibold shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Connect directly with the vehicle owner. Negotiate terms and pricing directly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Rental</h3>
                <p className="mb-6">Need this vehicle? Contact the owner directly for immediate booking.</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleCall(vehicle.supplier.phone)}
                    className="flex-1 bg-white text-blue-600 py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Call to Book
                  </button>
                  <button
                    onClick={() => handleMessage(vehicle.supplier.phone, vehicle.supplier.name, vehicle.name)}
                    className="flex-1 bg-yellow-400 text-black py-3 px-4 rounded-xl hover:bg-yellow-500 transition-colors font-semibold"
                  >
                    Message to Book
                  </button>
                </div>
              </div>

              {/* Additional Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose This Vehicle?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Fully insured and maintained</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Experienced operator included</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Flexible rental duration</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Verified owner with good ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};