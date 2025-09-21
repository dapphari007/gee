'use client';

import { useState } from 'react';
import LoginModal from '../../components/auth/LoginModal';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginModal 
        onClose={() => router.push('/')}
        onSwitchToSignup={() => router.push('/register')}
      />
    </div>
  );
}