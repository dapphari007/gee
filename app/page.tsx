'use client';

import { useEffect } from 'react';
import { useUser } from './lib/store/userStore';
import LandingPage from './components/LandingPage';
import LoadingScreen from './components/common/LoadingScreen';

export default function HomePage() {
  const { user, loading, hydrated } = useUser();

  useEffect(() => {
    // If user is logged in and store is hydrated, redirect to their dashboard
    if (user && hydrated && !loading) {
      const dashboardRoutes = {
        student: '/student',
        teacher: '/teacher',
        school: '/school',
        ngo: '/ngo',
        government: '/government'
      };
      
      const redirectPath = dashboardRoutes[user.role as keyof typeof dashboardRoutes] || '/student';
      window.location.href = redirectPath;
    }
  }, [user, loading, hydrated]);

  // Show loading screen if store is not hydrated yet or if loading
  if (!hydrated || loading) {
    return <LoadingScreen />;
  }

  // If user is logged in, show loading while redirecting
  if (user) {
    return <LoadingScreen />;
  }

  return <LandingPage />;
}