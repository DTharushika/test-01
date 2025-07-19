import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Building, Edit, Save, Camera } from 'lucide-react';
import { User as UserType } from '../types';
import { sriLankanDistricts } from '../data/services';

interface ProfilePageProps {
  user: UserType;
  onUpdateProfile: (data: Partial<UserType>) => void;
  onBack: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdateProfile, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address || '',
    district: user.district || '',
    businessName: user.businessName || '',
    businessType: user.businessType || '',
    experience: user.experience || '',
    description: user.description || '',
    profileImage: user.profileImage || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    onUpdateProfile(profileData);
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setProfileData({
          ...profileData,
          profileImage: imageUrl
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const getRoleTitle = () => {
    switch (user.role) {
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
    switch (user.role) {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`bg-gradient-to-r ${
        color === 'blue' ? 'from-blue-600 to-blue-700' :
        color === 'yellow' ? 'from-yellow-400 to-yellow-500' :
        'from-green-600 to-green-700'
      } py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className={`flex items-center ${
              color === 'yellow' ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200'
            } transition-colors mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </button>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                {profileData.profileImage ? (
                  <img 
                    src={profileData.profileImage} 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={32} className={`${color === 'yellow' ? 'text-yellow-600' : 'text-gray-600'}`} />
                )}
              </div>
              {isEditing && (
                <label className={`absolute -bottom-1 -right-1 ${
                  color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                  color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                  'bg-green-600 hover:bg-green-700'
                } text-white p-2 rounded-full cursor-pointer transition-colors`}>
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${color === 'yellow' ? 'text-black' : 'text-white'} mb-2`}>
                {user.name}
              </h1>
              <p className={`text-xl ${
                color === 'yellow' ? 'text-black' : color === 'blue' ? 'text-blue-100' : 'text-green-100'
              }`}>
                {getRoleTitle()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              <button
                onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                className={`flex items-center space-x-2 ${
                  color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                  color === 'yellow' ? 'bg-yellow-400 hover:bg-yellow-500 text-black' :
                  'bg-green-500 hover:bg-green-600'
                } ${color !== 'yellow' ? 'text-white' : ''} px-6 py-3 rounded-lg transition-colors font-semibold`}
              >
                {isEditing ? <Save size={20} /> : <Edit size={20} />}
                <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
              </button>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <User size={16} className="mr-2" />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                      />
                    ) : (
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">{profileData.name}</div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Mail size={16} className="mr-2" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                      />
                    ) : (
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">{profileData.email}</div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <Phone size={16} className="mr-2" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                      />
                    ) : (
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">{profileData.phone}</div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                      <MapPin size={16} className="mr-2" />
                      District
                    </label>
                    {isEditing ? (
                      <select
                        name="district"
                        value={profileData.district}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                      >
                        <option value="">Select District</option>
                        {sriLankanDistricts.map((district) => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                    ) : (
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">
                        {profileData.district || 'Not specified'}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="mr-2" />
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      placeholder="Your complete address"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  ) : (
                    <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">
                      {profileData.address || 'No address provided'}
                    </div>
                  )}
                </div>
              </div>

              {/* Business Information (for providers) */}
              {(user.role === 'vehicle_owner' || user.role === 'material_supplier') && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Business Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Building size={16} className="mr-2" />
                        Business Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="businessName"
                          value={profileData.businessName}
                          onChange={handleInputChange}
                          placeholder="Your business name"
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      ) : (
                        <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">
                          {profileData.businessName || 'Not specified'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Building size={16} className="mr-2" />
                        {user.role === 'vehicle_owner' ? 'Vehicle Types' : 'Material Types'}
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="businessType"
                          value={profileData.businessType}
                          onChange={handleInputChange}
                          placeholder={user.role === 'vehicle_owner' ? 'JCB, Excavator, Lorry' : 'Sand, Gravel, Bricks'}
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      ) : (
                        <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">
                          {profileData.businessType || 'Not specified'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Building size={16} className="mr-2" />
                        Years of Experience
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="experience"
                          value={profileData.experience}
                          onChange={handleInputChange}
                          placeholder="Years in business"
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                        />
                      ) : (
                        <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900">
                          {profileData.experience ? `${profileData.experience} years` : 'Not specified'}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Description
                    </label>
                    {isEditing ? (
                      <textarea
                        name="description"
                        value={profileData.description}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your business and services..."
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      />
                    ) : (
                      <div className="bg-gray-50 rounded-lg px-4 py-3 text-gray-900 min-h-[100px]">
                        {profileData.description || 'No description provided'}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};