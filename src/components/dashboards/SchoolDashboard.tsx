import React, { useState } from 'react';
import { 
  Home, Users, BookOpen, BarChart3, Settings, Trophy, 
  TrendingUp, Calendar, AlertCircle, CheckCircle, School, Award,
  Plus, Eye, Edit3, UserCheck, GraduationCap, FileText, PieChart
} from 'lucide-react';
import Navigation from '../common/Navigation';

const SchoolDashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" /> },
    { id: 'teachers', label: 'Teachers', icon: <School className="w-5 h-5" /> },
    { id: 'content', label: 'Content', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">School Administration Portal 🏫</h1>
        <p className="text-emerald-100 text-lg">Manage your institution's environmental education initiatives</p>
      </div>

      {/* Institution Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">1,247</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+45 this semester</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Teachers</p>
              <p className="text-2xl font-bold text-purple-600">68</p>
            </div>
            <School className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">All certified</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Eco Points Earned</p>
              <p className="text-2xl font-bold text-green-600">45,890</p>
            </div>
            <Trophy className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Award className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-green-600 text-sm">Top 5 in district</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-orange-600">87%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+8% this month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">District Environmental Award</h3>
                <p className="text-gray-600 text-sm">Recognized for outstanding sustainability initiatives</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <Award className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Green Campus Certification</h3>
                <p className="text-gray-600 text-sm">Achieved Level 3 Green Campus status</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 text-purple-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Student Participation Milestone</h3>
                <p className="text-gray-600 text-sm">Over 1000 students actively participating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">System Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">Content Review Needed</h3>
                <p className="text-gray-600 text-sm">5 modules pending administrative approval</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <Calendar className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">Upcoming Training</h3>
                <p className="text-gray-600 text-sm">Teacher training session scheduled for Jan 25th</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">System Update Complete</h3>
                <p className="text-gray-600 text-sm">Platform updated with latest features</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Department Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { dept: 'Grade 6-8', students: 425, completion: 92, points: 15230 },
            { dept: 'Grade 9-10', students: 398, completion: 85, points: 18450 },
            { dept: 'Grade 11-12', students: 424, completion: 79, points: 12210 }
          ].map((dept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">{dept.dept}</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{dept.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Completion:</span>
                  <span className="font-medium">{dept.completion}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Eco Points:</span>
                  <span className="font-medium text-green-600">{dept.points}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${dept.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStudentsManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Bulk Import
          </button>
        </div>
      </div>

      {/* Student Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">1,247</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Students</p>
              <p className="text-2xl font-bold text-green-600">1,089</p>
            </div>
            <UserCheck className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Top Performers</p>
              <p className="text-2xl font-bold text-purple-600">156</p>
            </div>
            <Trophy className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Points</p>
              <p className="text-2xl font-bold text-orange-600">342</p>
            </div>
            <Award className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Grade-wise Performance */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Grade-wise Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { grade: '12th', students: 198, active: 185, avgPoints: 425, completion: 92, performance: 'excellent' },
                { grade: '11th', students: 203, active: 189, avgPoints: 398, completion: 88, performance: 'excellent' },
                { grade: '10th', students: 215, active: 198, avgPoints: 367, completion: 85, performance: 'good' },
                { grade: '9th', students: 234, active: 212, avgPoints: 334, completion: 82, performance: 'good' },
                { grade: '8th', students: 198, active: 176, avgPoints: 298, completion: 78, performance: 'average' },
                { grade: '7th', students: 199, active: 167, avgPoints: 267, completion: 74, performance: 'average' }
              ].map((gradeData, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{gradeData.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{gradeData.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{gradeData.active}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{gradeData.avgPoints}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${gradeData.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{gradeData.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      gradeData.performance === 'excellent' ? 'bg-green-100 text-green-800' :
                      gradeData.performance === 'good' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {gradeData.performance}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
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

      {/* Top Performing Students */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Top Performing Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Aarav Sharma', grade: '12th A', points: 2850, level: 12, badges: 8, activities: 45 },
            { name: 'Priya Patel', grade: '11th B', points: 2640, level: 11, badges: 7, activities: 42 },
            { name: 'Rahul Kumar', grade: '10th A', points: 2480, level: 11, badges: 6, activities: 38 },
            { name: 'Sneha Gupta', grade: '12th C', points: 2200, level: 10, badges: 6, activities: 35 },
            { name: 'Arjun Singh', grade: '9th A', points: 2150, level: 10, badges: 5, activities: 33 },
            { name: 'Kavya Reddy', grade: '11th A', points: 2050, level: 9, badges: 5, activities: 31 }
          ].map((student, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.grade}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Points:</span>
                  <span className="font-medium text-green-600 ml-1">{student.points}</span>
                </div>
                <div>
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium text-blue-600 ml-1">{student.level}</span>
                </div>
                <div>
                  <span className="text-gray-600">Badges:</span>
                  <span className="font-medium text-purple-600 ml-1">{student.badges}</span>
                </div>
                <div>
                  <span className="text-gray-600">Activities:</span>
                  <span className="font-medium text-orange-600 ml-1">{student.activities}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTeachersManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Management</h1>
        <div className="flex space-x-3">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Teacher
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <GraduationCap className="w-4 h-4 mr-2" />
            Training Program
          </button>
        </div>
      </div>

      {/* Teacher Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Teachers</p>
              <p className="text-2xl font-bold text-purple-600">68</p>
            </div>
            <School className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Teachers</p>
              <p className="text-2xl font-bold text-green-600">64</p>
            </div>
            <UserCheck className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Certified</p>
              <p className="text-2xl font-bold text-blue-600">58</p>
            </div>
            <Award className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Rating</p>
              <p className="text-2xl font-bold text-orange-600">4.7</p>
            </div>
            <Trophy className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Teachers List */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Teaching Staff</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modules</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'Dr. Sarah Johnson', dept: 'Environmental Science', students: 156, modules: 8, rating: 4.9, status: 'active', certified: true },
                { name: 'Prof. Rajesh Kumar', dept: 'Biology', students: 142, modules: 6, rating: 4.8, status: 'active', certified: true },
                { name: 'Ms. Priya Sharma', dept: 'Chemistry', students: 134, modules: 7, rating: 4.7, status: 'active', certified: true },
                { name: 'Dr. Amit Patel', dept: 'Geography', students: 128, modules: 5, rating: 4.6, status: 'active', certified: false },
                { name: 'Mrs. Kavita Singh', dept: 'Physics', students: 145, modules: 4, rating: 4.5, status: 'training', certified: true }
              ].map((teacher, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                        {teacher.certified && (
                          <div className="text-xs text-green-600">✓ Certified</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.dept}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.modules}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{teacher.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      teacher.status === 'active' ? 'bg-green-100 text-green-800' :
                      teacher.status === 'training' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
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

      {/* Department Performance */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Department Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { dept: 'Environmental Science', teachers: 12, students: 456, avgRating: 4.8, completion: 92 },
            { dept: 'Biology', teachers: 15, students: 523, avgRating: 4.7, completion: 89 },
            { dept: 'Chemistry', teachers: 14, students: 498, avgRating: 4.6, completion: 87 },
            { dept: 'Geography', teachers: 10, students: 378, avgRating: 4.5, completion: 85 },
            { dept: 'Physics', teachers: 11, students: 412, avgRating: 4.4, completion: 83 },
            { dept: 'Mathematics', teachers: 6, students: 234, avgRating: 4.3, completion: 81 }
          ].map((dept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">{dept.dept}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Teachers:</span>
                  <span className="font-medium">{dept.teachers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{dept.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Rating:</span>
                  <span className="font-medium text-yellow-600">{dept.avgRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion:</span>
                  <span className="font-medium text-green-600">{dept.completion}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Content Library
          </button>
        </div>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Modules</p>
              <p className="text-2xl font-bold text-green-600">45</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Published</p>
              <p className="text-2xl font-bold text-blue-600">38</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Review</p>
              <p className="text-2xl font-bold text-orange-600">5</p>
            </div>
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Draft</p>
              <p className="text-2xl font-bold text-purple-600">2</p>
            </div>
            <Edit3 className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Content by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: 'Climate Science', modules: 12, students: 1089, completion: 87, color: 'bg-red-100 text-red-700' },
            { category: 'Biodiversity', modules: 10, students: 956, completion: 82, color: 'bg-green-100 text-green-700' },
            { category: 'Water Conservation', modules: 8, students: 834, completion: 89, color: 'bg-blue-100 text-blue-700' },
            { category: 'Renewable Energy', modules: 9, students: 723, completion: 78, color: 'bg-yellow-100 text-yellow-700' },
            { category: 'Waste Management', modules: 6, students: 612, completion: 85, color: 'bg-purple-100 text-purple-700' }
          ].map((cat, index) => (
            <div key={index} className={`p-4 rounded-lg ${cat.color}`}>
              <h3 className="font-semibold mb-3">{cat.category}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Modules:</span>
                  <span className="font-medium">{cat.modules}</span>
                </div>
                <div className="flex justify-between">
                  <span>Students:</span>
                  <span className="font-medium">{cat.students}</span>
                </div>
                <div className="flex justify-between">
                  <span>Completion:</span>
                  <span className="font-medium">{cat.completion}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Content */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Content Updates</h2>
        <div className="space-y-4">
          {[
            { title: 'Climate Change Impact Assessment', author: 'Dr. Sarah Johnson', status: 'published', updated: '2 hours ago', students: 234 },
            { title: 'Sustainable Agriculture Practices', author: 'Prof. Rajesh Kumar', status: 'review', updated: '1 day ago', students: 0 },
            { title: 'Renewable Energy Systems', author: 'Ms. Priya Sharma', status: 'published', updated: '2 days ago', students: 189 },
            { title: 'Water Pollution Control', author: 'Dr. Amit Patel', status: 'draft', updated: '3 days ago', students: 0 }
          ].map((content, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{content.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {content.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Updated {content.updated}</span>
                    <span>{content.students} students enrolled</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    content.status === 'published' ? 'bg-green-100 text-green-700' :
                    content.status === 'review' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {content.status}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
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
        <h1 className="text-3xl font-bold text-gray-800">Institution Analytics</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span className="text-gray-600">Comprehensive insights</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold text-green-600">87.3%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-600 text-sm">+5.2% from last month</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-blue-600">82.1%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-blue-600 text-sm">+3.1% from last month</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Session Time</p>
              <p className="text-2xl font-bold text-purple-600">42min</p>
            </div>
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-purple-600 text-sm">+8min from last month</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Environmental Impact</p>
              <p className="text-2xl font-bold text-orange-600">95.2</p>
            </div>
            <Award className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-orange-600 text-sm">Impact Score</span>
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Performance Trends</h2>
        <div className="grid grid-cols-12 gap-4 h-64">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
            const engagement = [65, 72, 78, 82, 85, 88, 87, 89, 91, 87, 85, 87][index];
            const height = (engagement / 100) * 100;
            
            return (
              <div key={month} className="text-center">
                <div className="h-48 flex items-end justify-center mb-2">
                  <div 
                    className="w-8 bg-gradient-to-t from-green-500 to-blue-500 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <div className="text-xs font-medium text-gray-700">{month}</div>
                <div className="text-xs text-gray-500">{engagement}%</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grade Performance Comparison */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Grade Performance Analysis</h2>
        <div className="space-y-4">
          {[
            { grade: '12th Grade', students: 198, avgPoints: 425, completion: 92, engagement: 89 },
            { grade: '11th Grade', students: 203, avgPoints: 398, completion: 88, engagement: 86 },
            { grade: '10th Grade', students: 215, avgPoints: 367, completion: 85, engagement: 84 },
            { grade: '9th Grade', students: 234, avgPoints: 334, completion: 82, engagement: 81 },
            { grade: '8th Grade', students: 198, avgPoints: 298, completion: 78, engagement: 77 },
            { grade: '7th Grade', students: 199, avgPoints: 267, completion: 74, engagement: 73 }
          ].map((grade, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{grade.grade}</h3>
                <span className="text-sm text-gray-600">{grade.students} students</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Avg Points</div>
                  <div className="font-semibold text-green-600">{grade.avgPoints}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Completion</div>
                  <div className="flex items-center">
                    <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${grade.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{grade.completion}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Engagement</div>
                  <div className="flex items-center">
                    <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${grade.engagement}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{grade.engagement}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchoolSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Institution Settings</h1>
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Configure school preferences</span>
        </div>
      </div>

      {/* Institution Profile */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Institution Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="Delhi Public School"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">School Code</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="DPS001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Principal Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="Dr. Rajesh Sharma"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              defaultValue="principal@dps.edu.in"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows={3}
              defaultValue="123 Education Street, New Delhi, India - 110001"
            />
          </div>
        </div>
      </div>

      {/* Academic Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Academic Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>2024-2025</option>
              <option>2025-2026</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grading System</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>CBSE (A-E Grades)</option>
              <option>ICSE (Percentage)</option>
              <option>State Board</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language of Instruction</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>English</option>
              <option>Hindi</option>
              <option>Bilingual (English + Hindi)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>IST (UTC +5:30)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Configuration</h2>
        <div className="space-y-4">
          {[
            { id: 'auto-enrollment', label: 'Auto-enroll new students', description: 'Automatically enroll students in environmental modules' },
            { id: 'parent-notifications', label: 'Parent notifications', description: 'Send progress updates to parents via email/SMS' },
            { id: 'leaderboard-public', label: 'Public leaderboards', description: 'Make student rankings visible to all students' },
            { id: 'external-partnerships', label: 'External partnerships', description: 'Allow NGO partnerships and external activities' },
            { id: 'data-analytics', label: 'Advanced analytics', description: 'Enable detailed performance tracking and reporting' }
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
      case 'students':
        return renderStudentsManagement();
      case 'teachers':
        return renderTeachersManagement();
      case 'content':
        return renderContentManagement();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSchoolSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title="School Administration"
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

export default SchoolDashboard;