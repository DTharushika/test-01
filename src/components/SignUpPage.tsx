import React, { useState } from 'react';
import { User, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { RegistrationForm } from './RegistrationForm';

interface SignUpPageProps {
  onRegistration: (data: any) => void;
  onLogin: (user: any) => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onRegistration, onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  if (showLoginForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const userData = {
                id: Date.now().toString(),
                name: 'Demo User',
                email: formData.get('email') as string,
                phone: '+94 76 1098385',
                role: 'service_consumer',
                isAuthenticated: true
              };
              onLogin(userData);
            }} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 px-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowLoginForm(false)}
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRole) {
    return (
      <RegistrationForm
        role={selectedRole}
        onSubmit={onRegistration}
        onBack={() => setSelectedRole(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join Auto X
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Choose your role and become part of Sri Lanka's leading heavy vehicle and material platform. 
              Connect, grow, and succeed with thousands of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Role
            </h2>
            <p className="text-xl text-gray-600">
              Select the option that best describes your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Consumer */}
            <div
              onClick={() => setSelectedRole('service_consumer')}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User className="text-blue-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Consumer</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Looking for heavy vehicles to rent or construction materials to purchase? 
                  Connect with verified providers across Sri Lanka.
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
                    Direct contact with providers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Compare prices and negotiate
                  </div>
                </div>

                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Register as Consumer
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Vehicle Owner */}
            <div
              onClick={() => setSelectedRole('vehicle_owner')}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-yellow-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="text-yellow-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Owner</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Own heavy vehicles like JCBs, excavators, or lorries? List them for rent and 
                  earn passive income through our platform.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    List your vehicles for rent
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Set your own rates and schedule
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Reach verified customers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Earn Rs. 150,000 - 500,000/month
                  </div>
                </div>

                <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700">
                  Register as Vehicle Owner
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Material Supplier */}
            <div
              onClick={() => setSelectedRole('material_supplier')}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Supplier</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Supply construction materials like sand, gravel, steel, or bricks? 
                  Connect with contractors across Sri Lanka.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    List your materials and prices
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Expand your customer base
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Quality certification support
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Earn Rs. 200,000 - 800,000/month
                  </div>
                </div>

                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Register as Material Supplier
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Already Have Account */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Already Have an Account?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sign in to access your dashboard and continue growing your business.
          </p>
          
          <button
            onClick={() => setShowLoginForm(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
          >
            Sign In to Your Account
          </button>
        </div>
      </section>
    </div>
  );
};