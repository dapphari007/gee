import React, { useState } from 'react';
import { 
  Home, Users, BookOpen, CheckCircle, BarChart3, Settings, 
  Plus, Eye, Edit3, Trash2, Calendar, Award, TrendingUp, Clock,
  FileText, Target, Star, AlertCircle, PieChart, Activity
} from 'lucide-react';
import Navigation from '../common/Navigation';

const TeacherDashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'students', label: 'My Students', icon: <Users className="w-5 h-5" /> },
    { id: 'content', label: 'Content', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'activities', label: 'Activities', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const students = [
    { id: 1, name: 'Aarav Sharma', class: '10th A', points: 450, level: 5, status: 'active', lastActive: '2 hours ago' },
    { id: 2, name: 'Priya Patel', class: '10th A', points: 380, level: 4, status: 'active', lastActive: '1 day ago' },
    { id: 3, name: 'Rahul Kumar', class: '10th B', points: 320, level: 3, status: 'inactive', lastActive: '3 days ago' },
    { id: 4, name: 'Sneha Gupta', class: '10th A', points: 290, level: 3, status: 'active', lastActive: '5 hours ago' }
  ];

  const contentModules = [
    { 
      id: 1, 
      title: 'Climate Change Basics', 
      status: 'published', 
      students: 45, 
      completion: 78, 
      created: '2025-01-10',
      category: 'Climate Science'
    },
    { 
      id: 2, 
      title: 'Sustainable Agriculture', 
      status: 'draft', 
      students: 0, 
      completion: 0, 
      created: '2025-01-15',
      category: 'Agriculture'
    },
    { 
      id: 3, 
      title: 'Water Conservation', 
      status: 'published', 
      students: 38, 
      completion: 85, 
      created: '2025-01-08',
      category: 'Conservation'
    }
  ];

  const pendingActivities = [
    { id: 1, student: 'Aarav Sharma', activity: 'Tree Planting Documentation', submitted: '2 hours ago', type: 'verification' },
    { id: 2, student: 'Priya Patel', activity: 'Water Usage Report', submitted: '1 day ago', type: 'assessment' },
    { id: 3, student: 'Rahul Kumar', activity: 'Recycling Project Photos', submitted: '2 days ago', type: 'verification' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Teacher! 👩‍🏫</h1>
        <p className="text-blue-100 text-lg">Manage your environmental education content and track student progress</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">156</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+12 this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Modules</p>
              <p className="text-2xl font-bold text-green-600">8</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">All published</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <p className="text-2xl font-bold text-orange-600">23</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Calendar className="w-4 h-4 text-orange-500 mr-1" />
            <span className="text-orange-600 text-sm">Review needed</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Completion</p>
              <p className="text-2xl font-bold text-purple-600">82%</p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+5% this week</span>
          </div>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Pending Reviews</h2>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              {pendingActivities.length} items
            </span>
          </div>
          <div className="space-y-4">
            {pendingActivities.map((activity) => (
              <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{activity.student}</h3>
                    <p className="text-gray-600 text-sm">{activity.activity}</p>
                    <p className="text-gray-500 text-xs mt-1">Submitted {activity.submitted}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Review
                    </button>
                    <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-300">
                      Later
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">New Content</span>
            </button>
            <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
              <CheckCircle className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Review Activities</span>
            </button>
            <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
              <BarChart3 className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">View Analytics</span>
            </button>
            <button className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors">
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Schedule Class</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">My Students</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600">{student.points}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-blue-600">Level {student.level}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastActive}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Module
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {contentModules.map((module) => (
          <div key={module.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {module.category}
                </span>
              </div>
              <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                module.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {module.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Students Enrolled:</span>
                <span className="font-medium">{module.students}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Completion Rate:</span>
                <span className="font-medium">{module.completion}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Created:</span>
                <span className="font-medium">{module.created}</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${module.completion}%` }}
              ></div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" />
                View
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Activity Management</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Activity
        </button>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <p className="text-2xl font-bold text-orange-600">23</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Approved Today</p>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Challenges</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Points Awarded</p>
              <p className="text-2xl font-bold text-purple-600">15,420</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Pending Activities */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Pending Activity Reviews</h2>
        <div className="space-y-4">
          {[
            { id: 1, student: 'Aarav Sharma', activity: 'Tree Planting Documentation', type: 'Photo Verification', submitted: '2 hours ago', points: 150, priority: 'high' },
            { id: 2, student: 'Priya Patel', activity: 'Water Conservation Report', type: 'Document Review', submitted: '1 day ago', points: 100, priority: 'medium' },
            { id: 3, student: 'Rahul Kumar', activity: 'Recycling Project Photos', type: 'Photo Verification', submitted: '2 days ago', points: 120, priority: 'low' },
            { id: 4, student: 'Sneha Gupta', activity: 'Energy Audit Report', type: 'Document Review', submitted: '3 days ago', points: 200, priority: 'high' }
          ].map((activity) => (
            <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{activity.student}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      activity.priority === 'high' ? 'bg-red-100 text-red-700' :
                      activity.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {activity.priority} priority
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{activity.activity}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{activity.type}</span>
                    <span>Submitted {activity.submitted}</span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {activity.points} points
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Review
                  </button>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Approve
                  </button>
                  <button className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Categories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Activity Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Tree Planting', count: 45, icon: '🌳', color: 'bg-green-100 text-green-700' },
            { name: 'Water Conservation', count: 32, icon: '💧', color: 'bg-blue-100 text-blue-700' },
            { name: 'Waste Management', count: 28, icon: '♻️', color: 'bg-purple-100 text-purple-700' },
            { name: 'Energy Saving', count: 19, icon: '⚡', color: 'bg-yellow-100 text-yellow-700' }
          ].map((category, index) => (
            <div key={index} className={`p-4 rounded-lg ${category.color}`}>
              <div className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm">{category.count} submissions</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Teaching Analytics</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span className="text-gray-600">Comprehensive insights</span>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Engagement</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Students</span>
              <span className="font-semibold">142/156</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '91%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Daily Active</span>
              <span className="font-semibold">89/156</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '57%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg. Completion</span>
              <span className="font-semibold text-green-600">82%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Quiz Scores</span>
              <span className="font-semibold text-blue-600">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Time Spent</span>
              <span className="font-semibold text-purple-600">45min</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Submissions</span>
              <span className="font-semibold">234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Approved</span>
              <span className="font-semibold text-green-600">198</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pending</span>
              <span className="font-semibold text-orange-600">23</span>
            </div>
          </div>
        </div>
      </div>

      {/* Class Performance */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Class Performance Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Activities</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { class: '10th A', students: 42, avgPoints: 385, completion: 89, activities: 156, performance: 'excellent' },
                { class: '10th B', students: 38, avgPoints: 342, completion: 82, activities: 134, performance: 'good' },
                { class: '9th A', students: 45, avgPoints: 298, completion: 76, activities: 142, performance: 'average' },
                { class: '9th B', students: 31, avgPoints: 267, completion: 71, activities: 98, performance: 'needs-improvement' }
              ].map((classData, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{classData.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{classData.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{classData.avgPoints}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${classData.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{classData.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{classData.activities}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      classData.performance === 'excellent' ? 'bg-green-100 text-green-800' :
                      classData.performance === 'good' ? 'bg-blue-100 text-blue-800' :
                      classData.performance === 'average' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {classData.performance.replace('-', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Trends */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Activity Trends</h2>
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const activities = [23, 34, 28, 42, 38, 15, 12][index];
            const maxActivities = 42;
            const height = (activities / maxActivities) * 100;
            
            return (
              <div key={day} className="text-center">
                <div className="h-32 flex items-end justify-center mb-2">
                  <div 
                    className="w-8 bg-green-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-gray-700">{day}</div>
                <div className="text-xs text-gray-500">{activities}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Settings</h1>
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Customize your preferences</span>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue="Dr. Sarah Johnson"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue="sarah.johnson@school.edu"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Environmental Science</option>
              <option>Biology</option>
              <option>Chemistry</option>
              <option>Geography</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>5+ years</option>
              <option>3-5 years</option>
              <option>1-3 years</option>
              <option>Less than 1 year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          {[
            { id: 'student-submissions', label: 'Student Activity Submissions', description: 'Get notified when students submit activities for review' },
            { id: 'completion-alerts', label: 'Module Completion Alerts', description: 'Receive alerts when students complete learning modules' },
            { id: 'performance-reports', label: 'Weekly Performance Reports', description: 'Get weekly summaries of class performance' },
            { id: 'system-updates', label: 'System Updates', description: 'Notifications about platform updates and new features' }
          ].map((setting) => (
            <div key={setting.id} className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id={setting.id}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <div className="flex-1">
                <label htmlFor={setting.id} className="text-sm font-medium text-gray-900">
                  {setting.label}
                </label>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grading Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Grading & Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto-approve Simple Activities</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Points Multiplier</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>1.0x (Standard)</option>
              <option>1.2x (Bonus)</option>
              <option>0.8x (Reduced)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deadline Flexibility</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Strict</option>
              <option>1 day grace period</option>
              <option>3 days grace period</option>
              <option>Flexible</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Requirement</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Required for all</option>
              <option>Required for rejections</option>
              <option>Optional</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'students':
        return renderStudents();
      case 'content':
        return renderContent();
      case 'activities':
        return renderActivities();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title="Teacher Portal"
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

export default TeacherDashboard;