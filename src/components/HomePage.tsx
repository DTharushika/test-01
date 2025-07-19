import React from 'react';
import { Truck, Package, Users, Star, CheckCircle, ArrowRight, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Sri Lanka's Leading Heavy Vehicle & Material Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Connect. Rent. Supply.
              <span className="text-yellow-400 block">Build Together.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              The ultimate platform connecting construction professionals across Sri Lanka. 
              Rent heavy vehicles, source quality materials, and grow your business - all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-yellow-400 text-black px-10 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                Sign Up Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center">
                Log In
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-200">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">25</div>
                <div className="text-blue-200">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-blue-200">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
                <div className="text-blue-200">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect construction professionals with heavy vehicle owners and material suppliers across Sri Lanka, 
              creating a seamless marketplace for all your construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="text-yellow-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Heavy Vehicle Rental</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Connect with vehicle owners across Sri Lanka. Rent JCBs, excavators, lorries, tippers, water bowsers, and more with professional operators.
                </p>
                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Explore Vehicles
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Supply</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Source quality construction materials from verified suppliers. Sand, soil, bricks, gravel, steel, and more delivered to your site.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Explore Materials
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Connection</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  No middlemen, no hidden fees. Connect directly with vehicle owners and material suppliers to negotiate the best deals.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Get Connected
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Users */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're seeking services or providing them, our platform offers unique advantages for all users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Partners</h3>
              <p className="text-gray-600">All vehicle owners and suppliers are verified with proper licenses and certifications.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to ensure your projects never face delays.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">All materials are quality-tested and vehicles are regularly maintained for optimal performance.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Island-wide Coverage</h3>
              <p className="text-gray-600">Connect with service providers across all 25 districts in Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to connect with the right service providers for your construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up & Choose Role</h3>
              <p className="text-gray-600">Register as a Service Consumer, Vehicle Owner, or Material Supplier based on your needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browse & Connect</h3>
              <p className="text-gray-600">Search for vehicles or materials by location and type. Contact providers directly through our platform.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negotiate & Complete</h3>
              <p className="text-gray-600">Negotiate terms directly with service providers and complete your construction projects successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of construction professionals who are already growing their businesses with our platform. 
            Start connecting today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-400 text-black px-12 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg">
              Sign Up Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-colors">
              Log In
            </button>
          </div>
        </div>
      </section>
    </>
  );
};