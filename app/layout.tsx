import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Green Environmental Education Platform',
  description: 'Gamified environmental education platform for students, teachers, and schools',
  keywords: ['education', 'environment', 'sustainability', 'gamification', 'learning'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
        {children}
      </body>
    </html>
  );
}