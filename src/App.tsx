import React, { useState } from 'react';
import { Login } from './components/auth/Login';
import { DoctorModule } from './components/modules/DoctorModule/DoctorModule';
import { LabModule } from './components/modules/LabModule/LabModule';
import { PharmacyModule } from './components/modules/PharmacyModule/PharmacyModule';
import { AdminModule } from './components/modules/AdminModule/AdminModule';

export type UserRole = 'doctor' | 'lab' | 'pharmacy' | 'admin';

interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (authenticatedUser: User) => {
    setUser(authenticatedUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Render appropriate module based on user role
  switch (user.role) {
    case 'doctor':
      return <DoctorModule user={user} onLogout={handleLogout} />;
    case 'lab':
      return <LabModule user={user} onLogout={handleLogout} />;
    case 'pharmacy':
      return <PharmacyModule user={user} onLogout={handleLogout} />;
    case 'admin':
      return <AdminModule user={user} onLogout={handleLogout} />;
  }
}

export default App;