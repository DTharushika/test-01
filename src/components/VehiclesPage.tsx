import React from 'react';
import { Truck, Star, Shield, Clock, Users, ArrowRight, CheckCircle, Award, TrendingUp, Phone, Mail } from 'lucide-react';

export const VehiclesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Vehicle Owners
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Own heavy vehicles? Join our platform and connect with construction companies across Sri Lanka. 
              Earn passive income by renting out your JCBs, excavators, lorries, and other heavy machinery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Increase Income</h3>
                <p className="text-blue-100 text-sm">Earn Rs. 150,000 - 500,000 monthly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Verified Customers</h3>
                <p className="text-blue-100 text-sm">Connect with verified construction companies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Build Reputation</h3>
                <p className="text-blue-100 text-sm">Earn ratings and grow your business</p>
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
              Why Join as a Vehicle Owner?
            </h2>
            <p className="text-xl text-gray-600">
              Maximize your vehicle utilization and grow your business with our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maximize Earnings</h3>
              <p className="text-gray-600 leading-relaxed">
                Turn your idle vehicles into income-generating assets. Set your own rates and availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Customers</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with verified construction companies and contractors across all 25 districts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get guidance on insurance requirements and protection for your valuable equipment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your own working hours and availability. Maintain control over your schedule.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Reputation</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn customer ratings and reviews to build a strong reputation in the industry.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Communicate directly with customers. No middlemen, negotiate your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vehicle Types We Support
            </h2>
            <p className="text-xl text-gray-600">
              List any type of heavy vehicle or construction equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'JCB & Excavators', icon: '🚜', desc: 'Backhoe loaders, excavators' },
              { name: 'Transport Vehicles', icon: '🚛', desc: 'Lorries, tippers, trucks' },
              { name: 'Water Supply', icon: '🚰', desc: 'Water bowsers, tankers' },
              { name: 'Specialized Equipment', icon: '🏗️', desc: 'Cranes, concrete mixers' }
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
              How to Register as Vehicle Owner
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start earning with your vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Register & Verify</h3>
              <p className="text-gray-600">Sign up with your business details and upload required documents for verification.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">List Your Vehicles</h3>
              <p className="text-gray-600">Add photos and details of your vehicles. Set your rates and availability.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Earning</h3>
              <p className="text-gray-600">Receive booking requests and connect with customers across Sri Lanka.</p>
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
              What you need to become a verified vehicle owner
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
                      <span className="text-gray-700">Vehicle registration documents</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Comprehensive insurance coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Operator certifications (if providing)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Vehicle maintenance records</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Business Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Minimum 2 years in business</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Valid contact information</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Professional service commitment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Quality equipment maintenance</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of successful vehicle owners who have grown their businesses with our platform. 
            Register today and start connecting with customers across Sri Lanka.
          </p>
          
          <button className="bg-yellow-400 text-black px-12 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg flex items-center mx-auto">
            <Truck className="mr-3 w-6 h-6" />
            Register as Vehicle Owner
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Active Vehicle Owners</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Owner Satisfaction Rate</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">25</div>
              <div className="text-blue-100">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};