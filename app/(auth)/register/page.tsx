'use client';

import { useState } from 'react';
import SignupModal from '../../components/auth/SignupModal';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignupModal 
        onClose={() => router.push('/')}
        onSwitchToLogin={() => router.push('/login')}
      />
    </div>
  );
}