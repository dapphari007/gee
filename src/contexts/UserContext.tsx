import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'school' | 'ngo' | 'government';
  institution?: string;
  grade?: string;
  points?: number;
  level?: number;
  badges?: string[];
  avatar?: string;
  language?: string;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, role: string) => Promise<void>;
  signup: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('ecolearn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: email.split('@')[0],
        email,
        role: role as User['role'],
        points: role === 'student' ? 150 : undefined,
        level: role === 'student' ? 2 : undefined,
        badges: role === 'student' ? ['eco-warrior', 'water-saver'] : undefined,
        institution: 'Delhi Public School',
        grade: role === 'student' ? '10th' : undefined,
        language: 'en'
      };
      
      setUser(newUser);
      localStorage.setItem('ecolearn_user', JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: Partial<User> & { password: string }) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        role: userData.role || 'student',
        points: userData.role === 'student' ? 0 : undefined,
        level: userData.role === 'student' ? 1 : undefined,
        badges: userData.role === 'student' ? [] : undefined,
        institution: userData.institution,
        grade: userData.grade,
        language: 'en'
      };
      
      setUser(newUser);
      localStorage.setItem('ecolearn_user', JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecolearn_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('ecolearn_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, login, signup, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};