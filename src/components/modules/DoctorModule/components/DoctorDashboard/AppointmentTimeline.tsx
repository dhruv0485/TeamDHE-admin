import React from 'react';
import { Video, Users, Phone } from 'lucide-react';

const appointments = [
  {
    time: '09:00 AM',
    patient: 'Sarah Johnson',
    type: 'video',
    status: 'completed',
    duration: '30min'
  },
  {
    time: '10:00 AM',
    patient: 'Michael Chen',
    type: 'in-person',
    status: 'in-progress',
    duration: '45min'
  },
  {
    time: '11:30 AM',
    patient: 'Emma Davis',
    type: 'audio',
    status: 'upcoming',
    duration: '30min'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'video':
      return Video;
    case 'audio':
      return Phone;
    default:
      return Users;
  }
};

export function AppointmentTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-200" />
      
      <div className="space-y-8">
        {appointments.map((appointment, index) => {
          const Icon = getTypeIcon(appointment.type);
          
          return (
            <div key={index} className="relative flex items-start space-x-4">
              <div className="relative">
                <div className={`absolute -left-2 w-4 h-4 rounded-full border-2 border-white ${
                  appointment.status === 'completed' ? 'bg-green-500' :
                  appointment.status === 'in-progress' ? 'bg-blue-500' :
                  'bg-gray-300'
                }`} />
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{appointment.patient}</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        {appointment.time} • {appointment.duration}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}