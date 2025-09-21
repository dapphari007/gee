import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

interface UserStore {
  user: User | null;
  loading: boolean;
  hydrated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setHydrated: (hydrated: boolean) => void;
  login: (email: string, password: string, role: string) => Promise<void>;
  signup: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false, // Initialize as false instead of true
      hydrated: false,
      
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
      setHydrated: (hydrated) => set({ hydrated }),
      
      login: async (email: string, password: string, role: string) => {
        try {
          set({ loading: true });
          // Simulate API call - replace with actual API call later
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
          
          set({ user: newUser, loading: false });
          
          // Redirect to appropriate dashboard based on role
          const dashboardRoutes = {
            student: '/student',
            teacher: '/teacher',
            school: '/school',
            ngo: '/ngo',
            government: '/government'
          };
          
          const redirectPath = dashboardRoutes[role as keyof typeof dashboardRoutes] || '/student';
          window.location.href = redirectPath;
          
        } catch (error) {
          set({ loading: false });
          throw error;
        }
      },
      
      signup: async (userData: Partial<User> & { password: string }) => {
        try {
          set({ loading: true });
          // Simulate API call - replace with actual API call later
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
          
          set({ user: newUser, loading: false });
          
          // Redirect to appropriate dashboard based on role
          const dashboardRoutes = {
            student: '/student',
            teacher: '/teacher',
            school: '/school',
            ngo: '/ngo',
            government: '/government'
          };
          
          const redirectPath = dashboardRoutes[(userData.role || 'student') as keyof typeof dashboardRoutes] || '/student';
          window.location.href = redirectPath;
          
        } catch (error) {
          set({ loading: false });
          throw error;
        }
      },
      
      logout: () => {
        set({ user: null });
        // Redirect to home page after logout
        window.location.href = '/';
      },
      
      updateUser: (updates: Partial<User>) => {
        const { user } = get();
        if (user) {
          const updatedUser = { ...user, ...updates };
          set({ user: updatedUser });
        }
      },
    }),
    {
      name: 'user-store',
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

// Hook for backward compatibility with existing components
export const useUser = () => {
  const { user, loading, hydrated, login, signup, logout, updateUser } = useUserStore();
  return { user, loading, hydrated, login, signup, logout, updateUser };
};