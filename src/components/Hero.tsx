import React from 'react';
import { Truck, Package, Users, Star, CheckCircle, ArrowRight, Play, Shield, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onServiceSelect: (service: 'materials' | 'vehicles') => void;
}

export const Hero: React.FC<HeroProps> = ({ onServiceSelect }) => {
  return (
    <>
      {/* Main Hero Banner */}
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
              Sri Lanka's Leading Construction Platform
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
                Get Started Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center">
                <Play className="mr-3 w-5 h-5" />
                Watch Demo
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

      {/* User Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who Can Join Auto X?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to rent, supply, or source - we have the perfect solution for your construction needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customers */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-blue-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customers</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Construction companies, contractors, and builders looking for reliable vehicles and quality materials for their projects.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Rent heavy vehicles with operators
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Source quality construction materials
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Direct contact with suppliers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Competitive pricing
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors font-semibold">
                  Join as Customer
                </button>
              </div>
            </div>

            {/* Vehicle Renters */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200">
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="text-yellow-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Owners</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Own heavy vehicles like JCBs, excavators, lorries, or cranes? Rent them out and earn passive income through our platform.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    List your vehicles for rent
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Set your own rates
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Reach verified customers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Insurance support
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-xl hover:bg-yellow-500 transition-colors font-semibold">
                  Become Vehicle Owner
                </button>
              </div>
            </div>

            {/* Material Suppliers */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Suppliers</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Supply sand, gravel, soil, bricks, and other construction materials. Connect with contractors across Sri Lanka.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    List your materials
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Expand customer base
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Quality certification
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Delivery coordination
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition-colors font-semibold">
                  Become Supplier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Auto X?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're revolutionizing the construction industry in Sri Lanka by creating direct connections 
                between vehicle owners, material suppliers, and customers. No middlemen, no hidden fees - 
                just transparent, efficient business relationships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 mt-1">
                    <Shield className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Verified Partners</h4>
                    <p className="text-gray-600">All vehicle owners and suppliers are verified with proper licenses and certifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-xl mr-4 mt-1">
                    <Clock className="text-yellow-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                    <p className="text-gray-600">Round-the-clock customer support to ensure your projects never face delays.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-xl mr-4 mt-1">
                    <Award className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
                    <p className="text-gray-600">All materials are quality-tested and vehicles are regularly maintained for optimal performance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Construction site with heavy machinery" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating achievement card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <Star className="text-white w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">4.9/5 Rating</div>
                    <div className="text-gray-600 text-sm">From 500+ users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Auto X Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to connect, transact, and succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up & Verify</h3>
              <p className="text-gray-600 leading-relaxed">
                Create your account and complete verification. Choose your role as customer, vehicle owner, or material supplier.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect & Browse</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse available vehicles and materials, or list your own. Connect directly with verified partners in your area.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negotiate & Complete</h3>
              <p className="text-gray-600 leading-relaxed">
                Negotiate terms directly with partners. Complete transactions safely with our support and build lasting business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from construction professionals across Sri Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Auto X transformed how we source materials for our projects. Direct contact with suppliers means better prices and faster delivery. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  KS
                </div>
                <div>
                  <div className="font-bold text-gray-900">Kamal Silva</div>
                  <div className="text-gray-600 text-sm">Construction Manager, Colombo</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a JCB owner, Auto X helped me reach more customers and increase my rental income by 60%. The platform is easy to use and support is excellent."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  NP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Nimal Perera</div>
                  <div className="text-gray-600 text-sm">Vehicle Owner, Kandy</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "My sand supply business grew 3x after joining Auto X. The platform connects me with contractors across the island. Great for expanding business!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RF
                </div>
                <div>
                  <div className="font-bold text-gray-900">Ravi Fernando</div>
                  <div className="text-gray-600 text-sm">Material Supplier, Galle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Construction Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of construction professionals who are already growing their businesses with Auto X. 
            Start connecting, renting, and supplying today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-400 text-black px-12 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg">
              Sign Up Now
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-400 p-3 rounded-xl">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Auto X</h3>
                  <p className="text-gray-400">Construction Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connecting construction professionals across Sri Lanka. 
                Building the future of construction commerce, one connection at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 cursor-pointer transition-colors">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 cursor-pointer transition-colors">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 cursor-pointer transition-colors">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+94 76 1098385</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@autox.lk</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <div className="hover:text-yellow-400 cursor-pointer transition-colors">About Us</div>
                <div className="hover:text-yellow-400 cursor-pointer transition-colors">How It Works</div>
                <div className="hover:text-yellow-400 cursor-pointer transition-colors">Support</div>
                <div className="hover:text-yellow-400 cursor-pointer transition-colors">Terms & Conditions</div>
                <div className="hover:text-yellow-400 cursor-pointer transition-colors">Privacy Policy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Auto X. All rights reserved. Built for Sri Lankan construction professionals.</p>
          </div>
        </div>
      </section>
    </>
  );
};