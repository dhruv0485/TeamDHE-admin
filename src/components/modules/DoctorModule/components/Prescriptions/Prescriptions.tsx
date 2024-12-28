import React from 'react';
import { Search, Plus, FileText, Download } from 'lucide-react';

interface Prescription {
  id: string;
  patientName: string;
  date: string;
  medications: string[];
  status: 'active' | 'completed' | 'cancelled';
}

const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    patientName: 'John Smith',
    date: '2024-03-15',
    medications: ['Lisinopril 10mg', 'Metformin 500mg'],
    status: 'active',
  },
  {
    id: '2',
    patientName: 'Emma Wilson',
    date: '2024-03-14',
    medications: ['Metformin 1000mg', 'Glipizide 5mg'],
    status: 'active',
  },
];

export function Prescriptions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Prescription
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {mockPrescriptions.map((prescription) => (
          <div key={prescription.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{prescription.patientName}</h3>
                <p className="text-sm text-gray-600">Prescribed on {prescription.date}</p>
                <div className="mt-2">
                  {prescription.medications.map((med, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2"
                    >
                      {med}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                  <FileText className="w-4 h-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-md">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}