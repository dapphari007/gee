# 🚀 Next.js Migration Guide

## 📁 Project Structure Conversion Plan

### Current Vite Structure → Next.js 14 App Router Structure

```
src/                           →  app/
├── components/                →  app/components/
│   ├── common/               →  app/components/ui/
│   ├── auth/                 →  app/components/auth/
│   └── dashboards/           →  app/components/dashboards/
├── contexts/                  →  app/lib/contexts/ (convert to Zustand)
├── App.tsx                    →  app/layout.tsx + app/page.tsx
├── main.tsx                   →  (removed - Next.js handles)
└── index.css                  →  app/globals.css

New Next.js directories:
app/
├── (auth)/                    # Route groups
│   ├── login/
│   └── register/
├── (dashboard)/
│   ├── student/
│   ├── teacher/
│   ├── school/
│   └── ngo/
├── api/                       # API routes
│   ├── auth/
│   ├── users/
│   ├── content/
│   ├── challenges/
│   └── analytics/
├── components/
├── lib/                       # Utilities, database, etc.
└── globals.css
```

## 🔧 Step-by-Step Migration Process

### Phase 1: Setup (Week 1)
1. **Initialize Next.js project structure**
   ```bash
   npx create-next-app@latest gee-nextjs --typescript --tailwind --eslint --app
   cd gee-nextjs
   npm install prisma @prisma/client next-auth
   ```

2. **Copy and adapt current components**
   - Move components to `app/components/`
   - Update import paths
   - Convert to Server/Client components as needed

3. **Setup Prisma**
   ```bash
   npx prisma init
   # Copy our schema.prisma
   npm run db:generate
   npm run db:push
   ```

### Phase 2: Authentication (Week 2)
4. **Implement NextAuth.js**
   - Setup auth providers (email, Google, etc.)
   - Create auth API routes
   - Implement role-based access control

5. **User Management System**
   - User registration/login flows
   - Profile management
   - Role assignment

### Phase 3: Core Features (Weeks 3-4)
6. **Convert Dashboard Components**
   - Student Dashboard → `/app/(dashboard)/student/page.tsx`
   - Teacher Dashboard → `/app/(dashboard)/teacher/page.tsx`
   - School Dashboard → `/app/(dashboard)/school/page.tsx`

7. **API Routes Implementation**
   - `/api/users/` - User CRUD operations
   - `/api/content/` - Content management
   - `/api/progress/` - Progress tracking
   - `/api/challenges/` - Challenge system

### Phase 4: Advanced Features (Weeks 5-6)
8. **Real-time Features**
   - WebSocket implementation for live updates
   - Real-time leaderboards
   - Notification system

9. **File Upload & Media**
   - Implement file upload system
   - Image/video handling for content
   - Profile pictures and attachments

### Phase 5: Testing & Deployment (Week 7)
10. **Testing Suite**
    - Unit tests for components
    - API route testing
    - E2E testing with Playwright

11. **Deployment & DevOps**
    - Vercel deployment setup
    - Database migration scripts
    - Environment configuration

## 🗂️ File Conversion Guide

### Component Conversion Examples

#### Before (Vite + React):
```tsx
// src/components/dashboards/StudentDashboard.tsx
import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';

const StudentDashboard = () => {
  // Component code
};

export default StudentDashboard;
```

#### After (Next.js App Router):
```tsx
// app/components/dashboards/StudentDashboard.tsx
'use client';

import React, { useState } from 'react';
import { useUser } from '@/lib/hooks/useUser';
import { Button } from '@/components/ui/button';

const StudentDashboard = () => {
  // Component code with Next.js patterns
};

export default StudentDashboard;
```

### Context → Zustand Store Conversion

#### Before (React Context):
```tsx
// src/contexts/UserContext.tsx
const UserContext = createContext();
export const useUser = () => useContext(UserContext);
```

#### After (Zustand):
```tsx
// app/lib/store/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (updates) => set((state) => ({ 
        user: state.user ? { ...state.user, ...updates } : null 
      })),
    }),
    { name: 'user-store' }
  )
);
```

## 🔌 API Route Examples

### User Management API
```tsx
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await prisma.user.findMany({
    where: { institutionId: session.user.institutionId },
    select: { id: true, name: true, email: true, role: true }
  });

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  // Create user logic
}
```

### Progress Tracking API
```tsx
// app/api/progress/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { userId, contentId, status, completionRate } = await request.json();
  
  const progress = await prisma.progress.upsert({
    where: { userId_contentId: { userId, contentId } },
    update: { status, completionRate, updatedAt: new Date() },
    create: { userId, contentId, status, completionRate }
  });
  
  return NextResponse.json(progress);
}
```

## 🎨 UI Component Library Setup

### Shadcn/ui Integration
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card dialog input label
```

### Component Structure
```
app/components/
├── ui/           # Shadcn components
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
├── auth/         # Auth-specific components
├── dashboard/    # Dashboard components
├── forms/        # Form components
└── layouts/      # Layout components
```

## 📊 Database Migration Strategy

### Development Migration
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Create and run migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed
```

### Production Migration
```bash
# Deploy schema changes
npx prisma migrate deploy

# Generate client for production
npx prisma generate
```

## 🚀 Deployment Checklist

### Vercel Deployment
- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Setup PostgreSQL database (Supabase/Railway)
- [ ] Configure domain and SSL
- [ ] Setup monitoring and analytics

### Environment Variables for Production
```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="production-secret"
NEXTAUTH_URL="https://yourdomain.com"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

## ⚡ Performance Optimizations

### Next.js Specific
- Use Server Components where possible
- Implement proper caching strategies
- Optimize images with next/image
- Use dynamic imports for large components
- Implement proper loading states

### Database Optimizations
- Add proper indexes to Prisma schema
- Use database connection pooling
- Implement query optimization
- Use Redis for caching

## 🔍 Monitoring & Analytics

### Setup Monitoring
```tsx
// app/lib/monitoring.ts
import { captureException } from '@sentry/nextjs';

export const logError = (error: Error, context?: any) => {
  console.error('Application Error:', error);
  captureException(error, { extra: context });
};
```

### Analytics Integration
```tsx
// app/lib/analytics.ts
export const trackEvent = (eventName: string, properties?: any) => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    window.gtag?.('event', eventName, properties);
  }
};
```

## 📚 Additional Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

---

*This migration guide provides a comprehensive roadmap for converting your Vite React application to a full-stack Next.js application with Prisma backend.*