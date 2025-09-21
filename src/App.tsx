import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './contexts/UserContext';
import LandingPage from './components/LandingPage';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import SchoolDashboard from './components/dashboards/SchoolDashboard';
import NGODashboard from './components/dashboards/NGODashboard';
import GovDashboard from './components/dashboards/GovDashboard';
import LoadingScreen from './components/common/LoadingScreen';

function AppContent() {
  const { user, loading } = useUser();
  
  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <LandingPage />;
  }

  // Route to appropriate dashboard based on user role
  switch (user.role) {
    case 'student':
      return <StudentDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'school':
      return <SchoolDashboard />;
    case 'ngo':
      return <NGODashboard />;
    case 'government':
      return <GovDashboard />;
    default:
      return <LandingPage />;
  }
}

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
        <AppContent />
      </div>
    </UserProvider>
  );
}

export default App;