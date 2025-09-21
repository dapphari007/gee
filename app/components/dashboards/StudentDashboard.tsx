'use client';

import React, { useState } from 'react';
import { Home, BookOpen, Trophy, Target, Users, BarChart3, Star, Award, Leaf, Zap, TreePine, Droplets, CheckCircle, Clock, TrendingUp, Medal, Crown, Siren as Fire, Heart } from 'lucide-react';
import Navigation from '../common/Navigation';
import { useUser } from '../../lib/store/userStore';

const StudentDashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');
  const { user, updateUser } = useUser();

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'learn', label: 'Learn', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'challenges', label: 'Challenges', icon: <Target className="w-5 h-5" /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-5 h-5" /> },
    { id: 'community', label: 'Community', icon: <Users className="w-5 h-5" /> },
    { id: 'progress', label: 'Progress', icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const badges = [
    { id: 'eco-warrior', name: 'Eco Warrior', icon: '🌱', color: 'bg-green-500', earned: true },
    { id: 'water-saver', name: 'Water Saver', icon: '💧', color: 'bg-blue-500', earned: true },
    { id: 'energy-expert', name: 'Energy Expert', icon: '⚡', color: 'bg-yellow-500', earned: false },
    { id: 'waste-warrior', name: 'Waste Warrior', icon: '♻️', color: 'bg-purple-500', earned: false },
    { id: 'tree-planter', name: 'Tree Planter', icon: '🌳', color: 'bg-emerald-600', earned: false },
    { id: 'climate-champion', name: 'Climate Champion', icon: '🏆', color: 'bg-orange-500', earned: false }
  ];

  const challenges = [
    { 
      id: 1, 
      title: 'Plant 5 Trees in Your Community', 
      points: 150, 
      deadline: '2025-02-15', 
      status: 'active',
      difficulty: 'medium',
      category: 'biodiversity',
      participants: 23
    },
    { 
      id: 2, 
      title: 'Reduce Water Usage by 30%', 
      points: 100, 
      deadline: '2025-01-30', 
      status: 'active',
      difficulty: 'easy',
      category: 'conservation',
      participants: 67
    },
    { 
      id: 3, 
      title: 'Organize School Recycling Drive', 
      points: 200, 
      deadline: '2025-02-28', 
      status: 'completed',
      difficulty: 'hard',
      category: 'waste',
      participants: 15
    }
  ];

  const leaderboardData = [
    { rank: 1, name: 'Aarav Sharma', points: 2850, level: 12, badge: '🏆', school: 'Delhi Public School' },
    { rank: 2, name: 'Priya Patel', points: 2640, level: 11, badge: '🥈', school: 'Kendriya Vidyalaya' },
    { rank: 3, name: 'Rahul Kumar', points: 2480, level: 11, badge: '🥉', school: 'St. Xavier School' },
    { rank: 4, name: user?.name || 'You', points: user?.points || 150, level: user?.level || 2, badge: '⭐', school: user?.institution || 'Your School' },
    { rank: 5, name: 'Sneha Gupta', points: 2200, level: 10, badge: '🌟', school: 'DAV Public School' }
  ];

  const learningModules = [
    { 
      id: 1, 
      title: 'Climate Change Fundamentals', 
      progress: 85, 
      lessons: 8, 
      completed: 7, 
      difficulty: 'Beginner',
      category: 'Climate',
      icon: '🌡️'
    },
    { 
      id: 2, 
      title: 'Sustainable Agriculture', 
      progress: 45, 
      lessons: 12, 
      completed: 5, 
      difficulty: 'Intermediate',
      category: 'Agriculture',
      icon: '🌾'
    },
    { 
      id: 3, 
      title: 'Renewable Energy Systems', 
      progress: 0, 
      lessons: 10, 
      completed: 0, 
      difficulty: 'Advanced',
      category: 'Energy',
      icon: '⚡'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 🌱</h1>
            <p className="text-green-100 text-lg">Ready to make a positive environmental impact today?</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-8 h-8 text-yellow-300" />
              <span className="text-2xl font-bold">Level {user?.level}</span>
            </div>
            <p className="text-green-100">Next: Level {(user?.level || 0) + 1}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Level Progress</span>
            <span>{user?.points || 0} / {((user?.level || 0) + 1) * 200} XP</span>
          </div>
          <div className="w-full bg-green-500 rounded-full h-3">
            <div 
              className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((user?.points || 0) % 200) / 200 * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Points</p>
              <p className="text-2xl font-bold text-green-600">{user?.points || 0}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+25 this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Challenges</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">8 completed</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Badges Earned</p>
              <p className="text-2xl font-bold text-purple-600">{user?.badges?.length || 0}</p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Medal className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-gray-600 text-sm">4 more to unlock</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Streak Days</p>
              <p className="text-2xl font-bold text-orange-600">7</p>
            </div>
            <Fire className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Clock className="w-4 h-4 text-orange-500 mr-1" />
            <span className="text-orange-600 text-sm">Keep it going!</span>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Active Challenges</h2>
          <div className="space-y-4">
            {challenges.filter(c => c.status === 'active').map((challenge) => (
              <div key={challenge.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {challenge.points} pts
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 text-blue-500 mr-1" />
                        {challenge.participants} joined
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-1" />
                        {challenge.deadline}
                      </span>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Achievement Badges</h2>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.id}
                className={`text-center p-4 rounded-lg border-2 transition-all ${
                  badge.earned 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className={`w-12 h-12 mx-auto rounded-full ${badge.color} flex items-center justify-center text-xl mb-2`}>
                  {badge.icon}
                </div>
                <h3 className="text-xs font-semibold text-gray-800">{badge.name}</h3>
                {!badge.earned && (
                  <p className="text-xs text-gray-500 mt-1">Not earned yet</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLearn = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Learning Modules</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <BookOpen className="w-4 h-4" />
          <span>Continue your environmental education journey</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningModules.map((module) => (
          <div key={module.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{module.icon}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {module.difficulty}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
            <p className="text-gray-600 mb-4">{module.category}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{module.completed}/{module.lessons} lessons</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
            
            <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
              module.progress > 0 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}>
              {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChallenges = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Environmental Challenges</h1>
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Make a real impact!</span>
        </div>
      </div>

      {/* Challenge Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { name: 'Water Conservation', icon: '💧', color: 'bg-blue-100 text-blue-700' },
          { name: 'Energy Saving', icon: '⚡', color: 'bg-yellow-100 text-yellow-700' },
          { name: 'Waste Reduction', icon: '♻️', color: 'bg-green-100 text-green-700' },
          { name: 'Biodiversity', icon: '🌱', color: 'bg-emerald-100 text-emerald-700' }
        ].map((category, index) => (
          <button key={index} className={`p-4 rounded-lg ${category.color} hover:scale-105 transition-transform`}>
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="font-semibold text-sm">{category.name}</div>
          </button>
        ))}
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    challenge.status === 'active' ? 'bg-green-100 text-green-700' :
                    challenge.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {challenge.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    challenge.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    challenge.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span>{challenge.points} points</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-500 mr-2" />
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span>Due: {challenge.deadline}</span>
                  </div>
                  <div className="flex items-center">
                    <TreePine className="w-4 h-4 text-green-500 mr-2" />
                    <span className="capitalize">{challenge.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                {challenge.status === 'completed' ? (
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </div>
                ) : (
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Join Challenge
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-600">School Rankings</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Top Environmental Champions</h2>
          <p className="opacity-90">Leading the way in sustainable actions</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {leaderboardData.map((student, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  student.name === user?.name 
                    ? 'bg-green-50 border-green-300 shadow-md' 
                    : 'border-gray-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    index === 2 ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {student.badge}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className={`font-bold ${student.name === user?.name ? 'text-green-700' : 'text-gray-800'}`}>
                        {student.name}
                      </h3>
                      {student.name === user?.name && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">YOU</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{student.school}</p>
                    <p className="text-xs text-gray-500">Level {student.level}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">{student.points}</div>
                  <div className="text-sm text-gray-500">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'learn':
        return renderLearn();
      case 'challenges':
        return renderChallenges();
      case 'leaderboard':
        return renderLeaderboard();
      case 'community':
        return renderCommunity();
      case 'progress':
        return renderProgress();
      default:
        return renderDashboard();
    }
  };

  const renderCommunity = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Eco Community</h1>
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Connect with fellow eco-warriors</span>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Community Members</p>
              <p className="text-2xl font-bold text-green-600">3,456</p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Groups</p>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Posts Today</p>
              <p className="text-2xl font-bold text-purple-600">89</p>
            </div>
            <BookOpen className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Your Connections</p>
              <p className="text-2xl font-bold text-orange-600">47</p>
            </div>
            <Heart className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Community Groups */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Tree Planters United', members: 234, category: 'Biodiversity', color: 'bg-green-100 text-green-700' },
            { name: 'Water Warriors', members: 189, category: 'Conservation', color: 'bg-blue-100 text-blue-700' },
            { name: 'Clean Energy Club', members: 156, category: 'Energy', color: 'bg-yellow-100 text-yellow-700' },
            { name: 'Waste Reduction Heroes', members: 203, category: 'Waste Management', color: 'bg-purple-100 text-purple-700' },
            { name: 'Climate Action Network', members: 298, category: 'Climate', color: 'bg-red-100 text-red-700' },
            { name: 'Sustainable Living', members: 167, category: 'Lifestyle', color: 'bg-emerald-100 text-emerald-700' }
          ].map((group, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-2">{group.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${group.color}`}>
                  {group.category}
                </span>
                <span className="text-sm text-gray-600">{group.members} members</span>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Community Feed</h2>
        <div className="space-y-4">
          {[
            { user: 'Aarav Sharma', action: 'completed the Tree Planting Challenge', time: '2 hours ago', points: 150 },
            { user: 'Priya Patel', action: 'shared a water conservation tip', time: '4 hours ago', points: 50 },
            { user: 'Rahul Kumar', action: 'joined the Clean Energy Club', time: '6 hours ago', points: 25 },
            { user: 'Sneha Gupta', action: 'earned the Eco Warrior badge', time: '1 day ago', points: 200 }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {activity.user.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
              <div className="flex items-center text-green-600">
                <Star className="w-4 h-4 mr-1" />
                <span className="font-medium">+{activity.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">My Progress</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Track your environmental impact</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{user?.points || 0}</div>
            <div className="text-green-100">Total Eco Points</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">Level {user?.level || 1}</div>
            <div className="text-green-100">Current Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{user?.badges?.length || 0}/12</div>
            <div className="text-green-100">Badges Earned</div>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Progress</h2>
        <div className="space-y-4">
          {learningModules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{module.title}</h3>
                <span className="text-2xl">{module.icon}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progress: {module.completed}/{module.lessons} lessons</span>
                <span className="font-medium">{module.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge Progress */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Challenge Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Completed Challenges</h3>
            {challenges.filter(c => c.status === 'completed').map((challenge) => (
              <div key={challenge.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                  <p className="text-sm text-gray-600">{challenge.category}</p>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">+{challenge.points}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Active Challenges</h3>
            {challenges.filter(c => c.status === 'active').map((challenge) => (
              <div key={challenge.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div>
                  <h4 className="font-medium text-gray-800">{challenge.title}</h4>
                  <p className="text-sm text-gray-600">Due: {challenge.deadline}</p>
                </div>
                <div className="flex items-center text-blue-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">{challenge.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { metric: 'Trees Planted', value: '12', icon: '🌳', color: 'text-green-600' },
            { metric: 'Water Saved', value: '450L', icon: '💧', color: 'text-blue-600' },
            { metric: 'Waste Recycled', value: '25kg', icon: '♻️', color: 'text-purple-600' },
            { metric: 'CO₂ Reduced', value: '85kg', icon: '🌍', color: 'text-emerald-600' }
          ].map((impact, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">{impact.icon}</div>
              <div className={`text-2xl font-bold ${impact.color} mb-1`}>{impact.value}</div>
              <div className="text-sm text-gray-600">{impact.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title="Student Portal"
        currentSection={currentSection}
        sections={sections}
        onSectionChange={setCurrentSection}
      />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default StudentDashboard;