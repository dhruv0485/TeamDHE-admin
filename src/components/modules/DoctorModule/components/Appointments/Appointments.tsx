import React from 'react';
import { Calendar as CalendarIcon, Clock, Video, Phone, Users } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  type: 'video' | 'audio' | 'in-person';
  status: 'upcoming' | 'completed' | 'cancelled';
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Smith',
    date: '2024-03-15',
    time: '10:00 AM',
    type: 'video',
    status: 'upcoming',
  },
  {
    id: '2',
    patientName: 'Emma Wilson',
    date: '2024-03-15',
    time: '11:30 AM',
    type: 'in-person',
    status: 'upcoming',
  },
];

const getAppointmentTypeIcon = (type: Appointment['type']) => {
  switch (type) {
    case 'video':
      return Video;
    case 'audio':
      return Phone;
    case 'in-person':
      return Users;
  }
};

export function Appointments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Today's Appointments</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <CalendarIcon className="w-4 h-4 mr-2" />
          View Calendar
        </button>
      </div>

      <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
        {mockAppointments.map((appointment) => {
          const TypeIcon = getAppointmentTypeIcon(appointment.type);
          return (
            <div key={appointment.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                  <div className="mt-1 flex items-center text-sm text-gray-600">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{appointment.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{appointment.time}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <TypeIcon className="w-4 h-4 mr-1" />
                    {appointment.type}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Start Session
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}