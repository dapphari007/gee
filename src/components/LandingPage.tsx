import React, { useState } from 'react';
import { Leaf, Trophy, Users, Target, Globe, ChevronRight, BookOpen, Award, Heart } from 'lucide-react';
import LoginModal from './auth/LoginModal';
import SignupModal from './auth/SignupModal';

const LandingPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with multimedia content and assessments designed for Indian curriculum"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamified Experience",
      description: "Earn points, badges, and climb leaderboards while learning about environment"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Real-World Challenges",
      description: "Take on environmental challenges and make actual impact in your community"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Platform",
      description: "Connect students, teachers, schools, NGOs, and government for collective action"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Engaged" },
    { number: "500+", label: "Schools Participating" },
    { number: "50+", label: "Environmental Projects" },
    { number: "25+", label: "NGO Partners" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Leaf className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold text-white">EcoLearn India</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Environmental Education Through{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Gamification
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Engage students across India in interactive environmental learning while creating real-world impact through verified activities and partnerships
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowSignup(true)}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center"
              >
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Globe className="w-12 h-12 text-green-200 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Heart className="w-8 h-8 text-red-300 opacity-60" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Award className="w-10 h-10 text-yellow-300 opacity-60" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Environmental Education Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for Indian educational institutions with features that promote engagement, learning, and real environmental impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100"
              >
                <div className="text-green-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Roles Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Built for Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600">
              Tailored dashboards and features for all participants in environmental education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { role: 'Students', description: 'Gamified learning with points, badges, and challenges', color: 'bg-blue-500' },
              { role: 'Teachers', description: 'Content management and student progress tracking', color: 'bg-purple-500' },
              { role: 'Schools', description: 'Institution-wide analytics and administration', color: 'bg-green-500' },
              { role: 'NGOs', description: 'Partnership portal and impact verification', color: 'bg-orange-500' },
              { role: 'Government', description: 'Policy oversight and regional monitoring', color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`${item.color} w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.role}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make an Environmental Impact?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students and educators across India in building a sustainable future
          </p>
          <button
            onClick={() => setShowSignup(true)}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSwitchToSignup={() => { setShowLogin(false); setShowSignup(true); }} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
    </div>
  );
};

export default LandingPage;