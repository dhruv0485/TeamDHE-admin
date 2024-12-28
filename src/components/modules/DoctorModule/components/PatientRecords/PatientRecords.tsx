import React from 'react';
import { Search, Filter, FileText, Calendar } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  lastVisit: string;
  condition: string;
}

const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Smith',
    age: 45,
    lastVisit: '2024-03-10',
    condition: 'Hypertension',
  },
  {
    id: '2',
    name: 'Emma Wilson',
    age: 32,
    lastVisit: '2024-03-15',
    condition: 'Diabetes Type 2',
  },
];

export function PatientRecords() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search patient records..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter Records
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 font-medium text-gray-700">
          <div>Patient Name</div>
          <div>Age</div>
          <div>Last Visit</div>
          <div>Condition</div>
          <div>Actions</div>
        </div>
        {mockPatients.map((patient) => (
          <div key={patient.id} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
            <div>{patient.name}</div>
            <div>{patient.age}</div>
            <div>{patient.lastVisit}</div>
            <div>{patient.condition}</div>
            <div className="flex space-x-2">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                <FileText className="w-4 h-4" />
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-md">
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}