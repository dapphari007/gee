'use client';

import { useEffect } from 'react';
import { useUser } from '../../lib/store/userStore';
import GovDashboard from '../../components/dashboards/GovDashboard';
import LoadingScreen from '../../components/common/LoadingScreen';

export default function GovernmentDashboardPage() {
  const { user, loading, hydrated } = useUser();

  useEffect(() => {
    // Redirect if user is not logged in or not a government user
    if (hydrated && !loading && (!user || user.role !== 'government')) {
      window.location.href = '/';
    }
  }, [user, loading, hydrated]);

  // Show loading screen if store is not hydrated yet or if loading
  if (!hydrated || loading) {
    return <LoadingScreen />;
  }

  // Show loading screen if no user or wrong role (while redirecting)
  if (!user || user.role !== 'government') {
    return <LoadingScreen />;
  }

  return <GovDashboard />;
}