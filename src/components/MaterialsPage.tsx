import React from 'react';
import { Package, Star, Shield, Clock, Users, ArrowRight, CheckCircle, Award, TrendingUp, Truck, Building } from 'lucide-react';

export const MaterialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-black">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Material Suppliers
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Supply construction materials to contractors across Sri Lanka. Join our platform and expand your 
              customer base while maintaining direct control over pricing and delivery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-black mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Expand Business</h3>
                <p className="text-black text-sm">Reach customers across all districts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 text-black mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality Certified</h3>
                <p className="text-black text-sm">Build trust with quality certifications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 text-black mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Direct Sales</h3>
                <p className="text-black text-sm">No middlemen, better margins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join as a Material Supplier?
            </h2>
            <p className="text-xl text-gray-600">
              Grow your material supply business and reach more customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expand Customer Base</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with contractors and construction companies across all 25 districts in Sri Lanka.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Customer Contact</h3>
              <p className="text-gray-600 leading-relaxed">
                Communicate directly with customers. Build relationships and negotiate your own terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Certification</h3>
              <p className="text-gray-600 leading-relaxed">
                Showcase your quality certifications and build trust with verified credentials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your own delivery schedules and service areas. Maintain control over your operations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Reputation</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn customer ratings and reviews to establish yourself as a trusted supplier.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Coordination</h3>
              <p className="text-gray-600 leading-relaxed">
                Coordinate deliveries efficiently and provide reliable service to your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Material Types We Support
            </h2>
            <p className="text-xl text-gray-600">
              List any type of construction material you supply
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sand & Soil', icon: '🏖️', desc: 'River sand, sea sand, garden soil' },
              { name: 'Gravel & Stone', icon: '🪨', desc: 'Crushed stone, aggregate, gravel' },
              { name: 'Bricks & Blocks', icon: '🧱', desc: 'Clay bricks, concrete blocks' },
              { name: 'Steel & Metal', icon: '🔩', desc: 'Reinforcement bars, metal sheets' }
            ].map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Register as Material Supplier
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start expanding your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Register & Verify</h3>
              <p className="text-gray-600">Sign up with your business details and upload quality certifications for verification.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">List Your Materials</h3>
              <p className="text-gray-600">Add photos and details of your materials. Set your prices and delivery areas.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Selling</h3>
              <p className="text-gray-600">Receive orders and connect with customers across Sri Lanka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Registration Requirements
            </h2>
            <p className="text-xl text-gray-600">
              What you need to become a verified material supplier
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Required Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Valid business registration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Quality certifications for materials</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Delivery capability documentation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Supply capacity verification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Environmental compliance certificates</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Business Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Minimum 1 year in business</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Consistent supply capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reliable delivery service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Quality assurance commitment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Customer service excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our successful material suppliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  NP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Nimal Perera</h4>
                  <p className="text-gray-600 text-sm">Sand Supplier - Kandy</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "My sand supply business grew 3x after joining this platform. Direct customer contact means better relationships and repeat orders."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  RF
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ravi Fernando</h4>
                  <p className="text-gray-600 text-sm">Brick Supplier - Galle</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The platform helped me reach contractors across the Southern Province. My monthly sales increased by 150%."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  KS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Kamala Silva</h4>
                  <p className="text-gray-600 text-sm">Steel Supplier - Colombo</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Quality certification through the platform helped build trust. Now I supply to major construction projects."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Expand Your Business?
          </h2>
          <p className="text-xl text-black mb-10 max-w-3xl mx-auto">
            Join hundreds of successful material suppliers who have grown their businesses with our platform. 
            Register today and start reaching customers across Sri Lanka.
          </p>
          
          <button className="bg-black text-yellow-400 px-12 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg flex items-center mx-auto">
            <Package className="mr-3 w-6 h-6" />
            Register as Material Supplier
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-black">
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-black">Active Material Suppliers</div>
            </div>
            <div className="text-black">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-black">Supplier Satisfaction Rate</div>
            </div>
            <div className="text-black">
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-black">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};