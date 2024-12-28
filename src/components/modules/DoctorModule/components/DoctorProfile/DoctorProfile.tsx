import React from 'react';
import { Mail, Phone, MapPin, Globe, Award, Book, Calendar } from 'lucide-react';

export function DoctorProfile() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-start space-x-6">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Doctor profile"
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">Dr. Sarah Johnson</h2>
            <p className="text-blue-600">Cardiologist</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                sarah.johnson@example.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                New York, USA
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-4 h-4 mr-2" />
                English, Spanish
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Qualifications</h3>
          </div>
          <ul className="space-y-2">
            <li>MD - Cardiology</li>
            <li>FACC Certification</li>
            <li>Board Certified</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Book className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Experience</h3>
          </div>
          <ul className="space-y-2">
            <li>15+ Years Practice</li>
            <li>1000+ Surgeries</li>
            <li>4.9 Rating</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Availability</h3>
          </div>
          <ul className="space-y-2">
            <li>Mon-Fri: 9:00 AM - 5:00 PM</li>
            <li>Sat: 9:00 AM - 1:00 PM</li>
            <li>Emergency Available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}