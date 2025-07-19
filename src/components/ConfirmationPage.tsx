import React from 'react';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';

interface ConfirmationPageProps {
  onGoHome: () => void;
  onGetStarted: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onGoHome, onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          {/* Success Icon */}
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Registration Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to Auto X! Your account has been created successfully. 
            You can now start connecting with service providers or customers across Sri Lanka.
          </p>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Complete your profile setup
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Browse available services
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Start connecting with providers
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Build your reputation on the platform
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGoHome}
              className="flex items-center justify-center bg-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-300 transition-colors font-semibold"
            >
              <Home className="mr-2 w-5 h-5" />
              Go to Home
            </button>
            <button
              onClick={onGetStarted}
              className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Support Information */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Need help getting started? Contact our support team at{' '}
              <a href="tel:+94761098385" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                +94 76 1098385
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};