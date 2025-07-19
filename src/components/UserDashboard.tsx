import React, { useState } from 'react';
import { Truck, Package, Filter, MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import { User, Vehicle } from '../types';
import { vehicles, sriLankanDistricts } from '../data/services';

interface UserDashboardProps {
  user: User;
  onVehicleSelect: (vehicle: Vehicle) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ user, onVehicleSelect }) => {
  const [selectedService, setSelectedService] = useState<'vehicles' | 'materials' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const vehicleCategories = [
    { id: 'jcb', name: 'JCB', icon: '🚜' },
    { id: 'excavator', name: 'Excavator', icon: '⛏️' },
    { id: 'tipper', name: 'Tipper', icon: '🚛' },
    { id: 'lorry', name: 'Lorry', icon: '🚚' },
    { id: 'bowser', name: 'Water Bowser', icon: '🚰' },
    { id: 'crane', name: 'Crane', icon: '🏗️' }
  ];

  const materialCategories = [
    { id: 'sand', name: 'Sand', icon: '🏖️' },
    { id: 'soil', name: 'Soil', icon: '🌱' },
    { id: 'gravel', name: 'Gravel', icon: '🪨' },
    { id: 'metal', name: 'Metal', icon: '🔩' },
    { id: 'bricks', name: 'Bricks', icon: '🧱' }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const categoryMatch = selectedCategory ? vehicle.category === selectedCategory : true;
    const districtMatch = selectedDistrict ? vehicle.supplier.district === selectedDistrict : true;
    return categoryMatch && districtMatch;
  });

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleMessage = (phone: string, supplierName: string, vehicleName: string) => {
    const message = `Hi ${supplierName}, I'm interested in your ${vehicleName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Welcome, {user.name.split(' ')[0]}!
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Choose the service you need. Connect with verified providers across Sri Lanka 
                and get the best deals for your construction projects.
              </p>
            </div>
          </div>
        </section>

        {/* Service Selection */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What do you need today?
              </h2>
              <p className="text-xl text-gray-600">
                Select the type of service you're looking for
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vehicles */}
              <div
                onClick={() => setSelectedService('vehicles')}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="text-blue-600 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Heavy Vehicles</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Rent JCBs, excavators, lorries, tippers, water bowsers, and other heavy machinery 
                    with professional operators across Sri Lanka.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {vehicleCategories.slice(0, 6).map((category) => (
                      <div key={category.id} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <div className="text-sm font-medium text-gray-700">{category.name}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 text-lg">
                    Browse Vehicles
                    <Truck className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div
                onClick={() => setSelectedService('materials')}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="bg-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Package className="text-yellow-600 w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Construction Materials</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Source quality construction materials like sand, soil, gravel, bricks, and steel 
                    from verified suppliers with island-wide delivery.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {materialCategories.slice(0, 6).map((category) => (
                      <div key={category.id} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <div className="text-sm font-medium text-gray-700">{category.name}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 text-lg">
                    Browse Materials
                    <Package className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (selectedService === 'vehicles') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedService(null)}
              className="text-white hover:text-blue-200 transition-colors mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
            >
              ← Back to Services
            </button>
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Heavy Vehicles</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Browse and rent heavy vehicles from verified owners across Sri Lanka
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-gray-600 mr-2" />
                <span className="font-semibold text-gray-900">Filters:</span>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">All Vehicle Types</option>
                {vehicleCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="">All Districts</option>
                {sriLankanDistricts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <div className="text-gray-600">
                Showing {filteredVehicles.length} vehicles
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Listings */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{vehicle.supplier.rating}</span>
                      </div>
                    </div>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                      vehicle.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {vehicle.available ? 'Available' : 'Booked'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>
                    
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{vehicle.supplier.name}</span>
                        <span className="text-sm text-gray-500">{vehicle.supplier.totalJobs} jobs</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {vehicle.supplier.location}, {vehicle.supplier.district}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">
                          Rs. {vehicle.pricePerHour.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">per hour</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-600">
                          Rs. {vehicle.pricePerDay.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">per day</div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => onVehicleSelect(vehicle)}
                        className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleCall(vehicle.supplier.phone)}
                        className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleMessage(vehicle.supplier.phone, vehicle.supplier.name, vehicle.name)}
                        className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-12">
                <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Materials view would be similar to vehicles
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedService(null)}
            className="text-black hover:text-gray-700 transition-colors mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            ← Back to Services
          </button>
          <div className="text-center text-black">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Construction Materials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Browse and order construction materials from verified suppliers across Sri Lanka
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Materials Coming Soon</h3>
          <p className="text-gray-600">Material listings will be available soon. Check back later!</p>
        </div>
      </section>
    </div>
  );
};