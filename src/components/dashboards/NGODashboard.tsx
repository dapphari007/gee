import React, { useState } from 'react';
import { 
  Home, Calendar, Users, FileText, BarChart3, Settings,
  Plus, MapPin, Clock, CheckCircle, Star, Heart, TreePine,
  Award, TrendingUp, AlertCircle, Eye, Edit3, Target, Activity
} from 'lucide-react';
import Navigation from '../common/Navigation';

const NGODashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-5 h-5" /> },
    { id: 'partnerships', label: 'Partnerships', icon: <Users className="w-5 h-5" /> },
    { id: 'verification', label: 'Verification', icon: <FileText className="w-5 h-5" /> },
    { id: 'impact', label: 'Impact', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const events = [
    {
      id: 1,
      title: 'Community Tree Planting Drive',
      date: '2025-02-15',
      location: 'Central Park, Delhi',
      participants: 150,
      schools: 12,
      status: 'upcoming',
      category: 'Biodiversity'
    },
    {
      id: 2,
      title: 'River Cleanup Campaign',
      date: '2025-01-28',
      location: 'Yamuna Riverbank',
      participants: 89,
      schools: 8,
      status: 'ongoing',
      category: 'Water Conservation'
    },
    {
      id: 3,
      title: 'Waste Segregation Workshop',
      date: '2025-01-10',
      location: 'Multiple Schools',
      participants: 234,
      schools: 15,
      status: 'completed',
      category: 'Waste Management'
    }
  ];

  const partnerships = [
    {
      id: 1,
      school: 'Delhi Public School',
      students: 450,
      projects: 12,
      points: 8500,
      status: 'active',
      joined: '2024-08-15'
    },
    {
      id: 2,
      school: 'Kendriya Vidyalaya',
      students: 380,
      projects: 9,
      points: 6750,
      status: 'active',
      joined: '2024-09-02'
    },
    {
      id: 3,
      school: 'St. Xavier School',
      students: 320,
      projects: 8,
      points: 5200,
      status: 'pending',
      joined: '2025-01-10'
    }
  ];

  const pendingVerifications = [
    {
      id: 1,
      school: 'Delhi Public School',
      student: 'Aarav Sharma',
      activity: 'Tree Planting Documentation',
      submitted: '2 hours ago',
      type: 'photo_verification',
      points: 150
    },
    {
      id: 2,
      school: 'Kendriya Vidyalaya',
      student: 'Priya Patel',
      activity: 'Water Conservation Report',
      submitted: '1 day ago',
      type: 'document_verification',
      points: 100
    },
    {
      id: 3,
      school: 'St. Xavier School',
      student: 'Rahul Kumar',
      activity: 'Recycling Project Photos',
      submitted: '2 days ago',
      type: 'photo_verification',
      points: 120
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">NGO Partnership Portal 🤝</h1>
        <p className="text-green-100 text-lg">Collaborate with schools to create meaningful environmental impact</p>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Partner Schools</p>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Heart className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-green-600 text-sm">Growing network</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Events</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Clock className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-blue-600 text-sm">2 this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Student Reach</p>
              <p className="text-2xl font-bold text-purple-600">3,456</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TreePine className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">Direct impact</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <p className="text-2xl font-bold text-orange-600">15</p>
            </div>
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-orange-600 text-sm">Action needed</span>
          </div>
        </div>
      </div>

      {/* Quick Actions and Pending Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Pending Verifications</h2>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              {pendingVerifications.length} items
            </span>
          </div>
          <div className="space-y-4">
            {pendingVerifications.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.activity}</h3>
                    <p className="text-sm text-gray-600">{item.student} - {item.school}</p>
                    <p className="text-xs text-gray-500 mt-1">Submitted {item.submitted}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{item.points} points</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 ml-4">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                      Approve
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                      Reject
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
            <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Create Event</span>
            </button>
            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">New Partnership</span>
            </button>
            <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
              <FileText className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Review Activities</span>
            </button>
            <button className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors">
              <BarChart3 className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Impact Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800 text-sm">{event.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                  event.status === 'ongoing' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {event.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.participants} participants from {event.schools} schools</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  {event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Environmental Events</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                    event.status === 'ongoing' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.status}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-red-500 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-purple-500 mr-2" />
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-green-500 mr-2" />
                    <span>{event.schools} schools</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Edit
                </button>
                {event.status === 'ongoing' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Manage
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPartnerships = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">School Partnerships</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Partnership
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnerships.map((partnership) => (
          <div key={partnership.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{partnership.school}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                partnership.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {partnership.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Students:</span>
                <span className="font-medium">{partnership.students}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Projects:</span>
                <span className="font-medium">{partnership.projects}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Eco Points:</span>
                <span className="font-medium text-green-600">{partnership.points}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Joined:</span>
                <span className="font-medium">{partnership.joined}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVerification = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Activity Verification</h1>
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Verify environmental activities</span>
        </div>
      </div>

      {/* Verification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <p className="text-2xl font-bold text-orange-600">47</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Approved Today</p>
              <p className="text-2xl font-bold text-green-600">23</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Verified</p>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            <Award className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Points Awarded</p>
              <p className="text-2xl font-bold text-purple-600">45,670</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Pending Verifications */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Pending Activity Verifications</h2>
        <div className="space-y-4">
          {[
            { id: 1, student: 'Aarav Sharma', school: 'Delhi Public School', activity: 'Tree Planting Documentation', type: 'Photo Verification', submitted: '2 hours ago', points: 150, priority: 'high', category: 'Biodiversity' },
            { id: 2, student: 'Priya Patel', school: 'Kendriya Vidyalaya', activity: 'Water Conservation Report', type: 'Document Review', submitted: '1 day ago', points: 100, priority: 'medium', category: 'Conservation' },
            { id: 3, student: 'Rahul Kumar', school: 'St. Xavier School', activity: 'Recycling Project Photos', type: 'Photo Verification', submitted: '2 days ago', points: 120, priority: 'low', category: 'Waste Management' },
            { id: 4, student: 'Sneha Gupta', school: 'DAV Public School', activity: 'Energy Audit Report', type: 'Document Review', submitted: '3 days ago', points: 200, priority: 'high', category: 'Energy' }
          ].map((verification) => (
            <div key={verification.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{verification.student}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      verification.priority === 'high' ? 'bg-red-100 text-red-700' :
                      verification.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {verification.priority} priority
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {verification.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{verification.activity}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{verification.school}</span>
                    <span>{verification.type}</span>
                    <span>Submitted {verification.submitted}</span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {verification.points} points
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Eye className="w-4 h-4" />
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

      {/* Verification Categories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Verification by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Tree Planting', pending: 12, approved: 89, icon: '🌳', color: 'bg-green-100 text-green-700' },
            { name: 'Water Conservation', pending: 8, approved: 67, icon: '💧', color: 'bg-blue-100 text-blue-700' },
            { name: 'Waste Management', pending: 15, approved: 54, icon: '♻️', color: 'bg-purple-100 text-purple-700' },
            { name: 'Energy Saving', pending: 6, approved: 43, icon: '⚡', color: 'bg-yellow-100 text-yellow-700' }
          ].map((category, index) => (
            <div key={index} className={`p-4 rounded-lg ${category.color}`}>
              <div className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Pending:</span>
                    <span className="font-medium">{category.pending}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Approved:</span>
                    <span className="font-medium">{category.approved}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Verifications */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recently Verified Activities</h2>
        <div className="space-y-3">
          {[
            { student: 'Arjun Singh', activity: 'Community Garden Setup', status: 'approved', points: 180, time: '1 hour ago' },
            { student: 'Kavya Reddy', activity: 'Plastic Bottle Collection', status: 'approved', points: 120, time: '2 hours ago' },
            { student: 'Rohan Gupta', activity: 'Solar Panel Installation', status: 'rejected', points: 0, time: '3 hours ago' },
            { student: 'Ananya Joshi', activity: 'River Cleanup Drive', status: 'approved', points: 200, time: '4 hours ago' }
          ].map((recent, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {recent.student.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{recent.student}</p>
                  <p className="text-sm text-gray-600">{recent.activity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  recent.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {recent.status}
                </span>
                {recent.status === 'approved' && (
                  <span className="text-green-600 font-medium">+{recent.points}</span>
                )}
                <span className="text-sm text-gray-500">{recent.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderImpact = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Environmental Impact</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-green-600" />
          <span className="text-gray-600">Measure real-world impact</span>
        </div>
      </div>

      {/* Impact Overview */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Total Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2,450</div>
            <div className="text-green-100">Trees Planted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15,670L</div>
            <div className="text-green-100">Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3,240kg</div>
            <div className="text-green-100">Waste Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">8,950kg</div>
            <div className="text-green-100">CO₂ Reduced</div>
          </div>
        </div>
      </div>

      {/* Impact by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Impact by Category</h2>
          <div className="space-y-4">
            {[
              { category: 'Biodiversity', impact: '2,450 trees planted', percentage: 35, color: 'bg-green-500' },
              { category: 'Water Conservation', impact: '15,670L water saved', percentage: 28, color: 'bg-blue-500' },
              { category: 'Waste Management', impact: '3,240kg waste recycled', percentage: 22, color: 'bg-purple-500' },
              { category: 'Energy Efficiency', impact: '8,950kg CO₂ reduced', percentage: 15, color: 'bg-yellow-500' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{item.category}</span>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${item.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Impact Trends</h2>
          <div className="grid grid-cols-6 gap-2 h-48">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
              const impact = [45, 62, 78, 89, 95, 87][index];
              const height = (impact / 100) * 100;
              
              return (
                <div key={month} className="text-center">
                  <div className="h-32 flex items-end justify-center mb-2">
                    <div 
                      className="w-6 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700">{month}</div>
                  <div className="text-xs text-gray-500">{impact}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* School Impact Rankings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">School Impact Rankings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">School</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Activities</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Impact Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { rank: 1, school: 'Delhi Public School', students: 450, activities: 89, score: 2850, badge: '🏆' },
                { rank: 2, school: 'Kendriya Vidyalaya', students: 380, activities: 76, score: 2640, badge: '🥈' },
                { rank: 3, school: 'St. Xavier School', students: 320, activities: 65, score: 2480, badge: '🥉' },
                { rank: 4, school: 'DAV Public School', students: 290, activities: 58, score: 2200, badge: '⭐' },
                { rank: 5, school: 'Modern School', students: 275, activities: 52, score: 2050, badge: '🌟' }
              ].map((school, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{school.badge}</span>
                      <span className="font-bold text-gray-900">#{school.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{school.school}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{school.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{school.activities}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-bold text-green-600">{school.score}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      school.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      school.rank <= 3 ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {school.rank === 1 ? 'Champion' : school.rank <= 3 ? 'Excellent' : 'Good'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Community Forest Initiative',
              school: 'Delhi Public School',
              description: 'Students planted 500 trees in collaboration with local authorities, creating a mini forest that will absorb 12 tons of CO₂ annually.',
              impact: '500 trees planted',
              date: '2 weeks ago'
            },
            {
              title: 'River Restoration Project',
              school: 'Kendriya Vidyalaya',
              description: 'A comprehensive cleanup drive that removed 2 tons of waste from the local river and established ongoing monitoring systems.',
              impact: '2 tons waste removed',
              date: '1 month ago'
            },
            {
              title: 'Solar Energy Campaign',
              school: 'St. Xavier School',
              description: 'Students advocated for solar panel installation in their community, resulting in 50kW of clean energy generation.',
              impact: '50kW clean energy',
              date: '3 weeks ago'
            },
            {
              title: 'Waste-to-Wealth Program',
              school: 'DAV Public School',
              description: 'Innovative recycling program that converted 1 ton of plastic waste into useful products while educating the community.',
              impact: '1 ton plastic recycled',
              date: '2 months ago'
            }
          ].map((story, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{story.title}</h3>
              <p className="text-sm text-blue-600 mb-2">{story.school}</p>
              <p className="text-gray-600 text-sm mb-3">{story.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  {story.impact}
                </span>
                <span className="text-xs text-gray-500">{story.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNGOSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">NGO Settings</h1>
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Configure organization preferences</span>
        </div>
      </div>

      {/* Organization Profile */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Organization Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="Green Earth Foundation"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="NGO/2019/0012345"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="Dr. Meera Sharma"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="contact@greenearthfoundation.org"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input 
              type="url" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="https://www.greenearthfoundation.org"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows={3}
              defaultValue="Dedicated to environmental conservation and sustainable development through education, community engagement, and innovative solutions."
            />
          </div>
        </div>
      </div>

      {/* Verification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Verification Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto-approval Threshold</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Manual review for all</option>
              <option>Auto-approve simple activities</option>
              <option>Auto-approve up to 100 points</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Response Time Target</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>24 hours</option>
              <option>48 hours</option>
              <option>72 hours</option>
              <option>1 week</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Evidence Requirements</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Photos required</option>
              <option>Photos + description</option>
              <option>Photos + GPS location</option>
              <option>Comprehensive documentation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quality Standards</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Standard verification</option>
              <option>Enhanced verification</option>
              <option>Strict verification</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          {[
            { id: 'new-submissions', label: 'New activity submissions', description: 'Get notified when students submit activities for verification' },
            { id: 'partnership-requests', label: 'Partnership requests', description: 'Receive alerts for new school partnership requests' },
            { id: 'event-registrations', label: 'Event registrations', description: 'Notifications when students register for your events' },
            { id: 'impact-milestones', label: 'Impact milestones', description: 'Celebrate when environmental impact goals are reached' },
            { id: 'monthly-reports', label: 'Monthly reports', description: 'Receive monthly summaries of activities and impact' }
          ].map((setting) => (
            <div key={setting.id} className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id={setting.id}
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
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

      {/* Partnership Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Partnership Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Partner Schools</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>No limit</option>
              <option>Up to 10 schools</option>
              <option>Up to 25 schools</option>
              <option>Up to 50 schools</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Focus</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Local (City)</option>
              <option>Regional (State)</option>
              <option>National</option>
              <option>No restriction</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Capacity</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Small (up to 50 participants)</option>
              <option>Medium (up to 200 participants)</option>
              <option>Large (up to 500 participants)</option>
              <option>No limit</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Duration</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>Ongoing</option>
              <option>1 Academic Year</option>
              <option>6 Months</option>
              <option>Project-based</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'events':
        return renderEvents();
      case 'partnerships':
        return renderPartnerships();
      case 'verification':
        return renderVerification();
      case 'impact':
        return renderImpact();
      case 'settings':
        return renderNGOSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title="NGO Partnership Portal"
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

export default NGODashboard;