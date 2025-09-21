'use client';

import React, { useState } from 'react';
import { 
  Home, MapPin, BarChart3, FileText, Settings, AlertTriangle,
  TrendingUp, Users, School, Building, Award, Target,
  PieChart, Activity, Download, Calendar, CheckCircle, Clock, Plus
} from 'lucide-react';
import Navigation from '../common/Navigation';

const GovDashboard: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'regions', label: 'Regional Data', icon: <MapPin className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
    { id: 'policy', label: 'Policy', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const regionalData = [
    {
      region: 'Delhi',
      schools: 1247,
      students: 45678,
      completion: 87,
      ecoPoints: 234567,
      ngos: 23,
      status: 'excellent'
    },
    {
      region: 'Mumbai',
      schools: 1089,
      students: 39234,
      completion: 82,
      ecoPoints: 198234,
      ngos: 19,
      status: 'good'
    },
    {
      region: 'Bangalore',
      schools: 967,
      students: 34567,
      completion: 79,
      ecoPoints: 156789,
      ngos: 17,
      status: 'good'
    },
    {
      region: 'Chennai',
      schools: 834,
      students: 28456,
      completion: 74,
      ecoPoints: 134567,
      ngos: 15,
      status: 'average'
    },
    {
      region: 'Kolkata',
      schools: 756,
      students: 25789,
      completion: 69,
      ecoPoints: 112345,
      ngos: 12,
      status: 'needs-improvement'
    }
  ];

  const policyInitiatives = [
    {
      id: 1,
      title: 'Green Campus Certification Program',
      status: 'active',
      schools: 234,
      deadline: '2025-06-30',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Mandatory Environmental Education Curriculum',
      status: 'implementation',
      schools: 567,
      deadline: '2025-04-15',
      priority: 'critical'
    },
    {
      id: 3,
      title: 'Student Environmental Impact Assessment',
      status: 'planning',
      schools: 0,
      deadline: '2025-12-31',
      priority: 'medium'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Government Oversight Portal 🏛️</h1>
        <p className="text-blue-100 text-lg">Monitor environmental education initiatives across regions and institutions</p>
      </div>

      {/* National Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Schools</p>
              <p className="text-2xl font-bold text-blue-600">4,893</p>
            </div>
            <School className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+12% this year</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Students</p>
              <p className="text-2xl font-bold text-green-600">173,724</p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Award className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-green-600 text-sm">High engagement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">NGO Partners</p>
              <p className="text-2xl font-bold text-purple-600">86</p>
            </div>
            <Building className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <Target className="w-4 h-4 text-purple-500 mr-1" />
            <span className="text-purple-600 text-sm">Growing network</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">National Avg.</p>
              <p className="text-2xl font-bold text-orange-600">78.2%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 text-sm">+3.2% improvement</span>
          </div>
        </div>
      </div>

      {/* Regional Overview */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Regional Performance Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Schools</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eco Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NGOs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {regionalData.map((region, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="font-medium text-gray-900">{region.region}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{region.schools.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{region.students.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${region.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{region.completion}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    {region.ecoPoints.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{region.ngos}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      region.status === 'excellent' ? 'bg-green-100 text-green-800' :
                      region.status === 'good' ? 'bg-blue-100 text-blue-800' :
                      region.status === 'average' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {region.status.replace('-', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Initiatives and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Active Policy Initiatives</h2>
          <div className="space-y-4">
            {policyInitiatives.map((policy) => (
              <div key={policy.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{policy.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    policy.priority === 'critical' ? 'bg-red-100 text-red-700' :
                    policy.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {policy.priority}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="block text-xs text-gray-500">Status</span>
                    <span className="font-medium capitalize">{policy.status.replace('-', ' ')}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">Schools</span>
                    <span className="font-medium">{policy.schools}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">Deadline</span>
                    <span className="font-medium">{policy.deadline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">System Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">Low Participation Alert</h3>
                <p className="text-gray-600 text-sm">3 regions showing declining engagement rates</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <FileText className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">Compliance Review Due</h3>
                <p className="text-gray-600 text-sm">Monthly environmental impact reports pending</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <Award className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-800">Achievement Milestone</h3>
                <p className="text-gray-600 text-sm">National participation target exceeded by 15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegions = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Regional Environmental Data</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionalData.map((region, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{region.region}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                region.status === 'excellent' ? 'bg-green-100 text-green-700' :
                region.status === 'good' ? 'bg-blue-100 text-blue-700' :
                region.status === 'average' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {region.status.replace('-', ' ')}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Schools:</span>
                <span className="font-semibold">{region.schools.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Students:</span>
                <span className="font-semibold">{region.students.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">NGO Partners:</span>
                <span className="font-semibold">{region.ngos}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Eco Points:</span>
                <span className="font-semibold text-green-600">{region.ecoPoints.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Completion Rate</span>
                <span className="font-medium">{region.completion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${
                    region.completion >= 80 ? 'bg-green-500' :
                    region.completion >= 70 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${region.completion}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">National Analytics</h1>
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span className="text-gray-600">Comprehensive data insights</span>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">National Participation</p>
              <p className="text-2xl font-bold text-green-600">78.2%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-600 text-sm">+3.2% from last quarter</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Environmental Impact</p>
              <p className="text-2xl font-bold text-blue-600">92.5</p>
            </div>
            <Award className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-blue-600 text-sm">Impact Score (out of 100)</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Policy Compliance</p>
              <p className="text-2xl font-bold text-purple-600">85.7%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-purple-600 text-sm">Across all regions</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Budget Utilization</p>
              <p className="text-2xl font-bold text-orange-600">₹2.4Cr</p>
            </div>
            <Building className="w-8 h-8 text-orange-500" />
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-orange-600 text-sm">67% of allocated budget</span>
          </div>
        </div>
      </div>

      {/* Regional Performance Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Regional Performance Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Participation by State</h3>
            <div className="space-y-3">
              {[
                { state: 'Delhi', participation: 87, schools: 1247, color: 'bg-green-500' },
                { state: 'Maharashtra', participation: 82, schools: 1089, color: 'bg-blue-500' },
                { state: 'Karnataka', participation: 79, schools: 967, color: 'bg-purple-500' },
                { state: 'Tamil Nadu', participation: 74, schools: 834, color: 'bg-yellow-500' },
                { state: 'West Bengal', participation: 69, schools: 756, color: 'bg-red-500' }
              ].map((state, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${state.color} rounded`}></div>
                    <span className="font-medium text-gray-800">{state.state}</span>
                    <span className="text-sm text-gray-600">({state.schools} schools)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${state.color} h-2 rounded-full`}
                        style={{ width: `${state.participation}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{state.participation}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Monthly Trends</h3>
            <div className="grid grid-cols-6 gap-2 h-32">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => {
                const participation = [65, 72, 78, 82, 85, 78][index];
                const height = (participation / 100) * 100;
                
                return (
                  <div key={month} className="text-center">
                    <div className="h-20 flex items-end justify-center mb-2">
                      <div 
                        className="w-6 bg-gradient-to-t from-blue-500 to-green-500 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-medium text-gray-700">{month}</div>
                    <div className="text-xs text-gray-500">{participation}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact Metrics */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">National Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { metric: 'Trees Planted', value: '2,45,670', icon: '🌳', change: '+12%', color: 'text-green-600' },
            { metric: 'Water Saved', value: '15.6M Liters', icon: '💧', change: '+8%', color: 'text-blue-600' },
            { metric: 'Waste Recycled', value: '3,240 Tons', icon: '♻️', change: '+15%', color: 'text-purple-600' },
            { metric: 'CO₂ Reduced', value: '89,500 kg', icon: '🌍', change: '+18%', color: 'text-emerald-600' }
          ].map((impact, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">{impact.icon}</div>
              <div className={`text-2xl font-bold ${impact.color} mb-1`}>{impact.value}</div>
              <div className="text-sm text-gray-600 mb-1">{impact.metric}</div>
              <div className="text-xs text-green-600 font-medium">{impact.change} this quarter</div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Effectiveness */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Program Effectiveness Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Student Engagement</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Daily Active Users</span>
                <span className="font-semibold">89,234</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Module Completion</span>
                <span className="font-semibold">82.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Teacher Adoption</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Teachers</span>
                <span className="font-semibold">12,456</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Content Creation</span>
                <span className="font-semibold">91.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">System Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Platform Uptime</span>
                <span className="font-semibold">99.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '99%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Response Time</span>
                <span className="font-semibold">1.2s avg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Government Reports</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Performance Reports</h3>
            <BarChart3 className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="font-medium text-gray-800">Monthly Performance Summary</div>
              <div className="text-sm text-gray-600">Comprehensive monthly analytics</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Regional Comparison</div>
              <div className="text-sm text-gray-600">State-wise performance analysis</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Trend Analysis</div>
              <div className="text-sm text-gray-600">Long-term performance trends</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Impact Reports</h3>
            <Award className="w-6 h-6 text-green-500" />
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="font-medium text-gray-800">Environmental Impact Assessment</div>
              <div className="text-sm text-gray-600">Real-world environmental outcomes</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Carbon Footprint Report</div>
              <div className="text-sm text-gray-600">CO₂ reduction measurements</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Sustainability Metrics</div>
              <div className="text-sm text-gray-600">Comprehensive sustainability data</div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Compliance Reports</h3>
            <CheckCircle className="w-6 h-6 text-purple-500" />
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="font-medium text-gray-800">Policy Compliance Status</div>
              <div className="text-sm text-gray-600">Adherence to environmental policies</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Audit Reports</div>
              <div className="text-sm text-gray-600">Internal and external audit results</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="font-medium text-gray-800">Regulatory Compliance</div>
              <div className="text-sm text-gray-600">Government regulation adherence</div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Generated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'Q4 2024 Environmental Impact Report', type: 'Impact', generated: '2025-01-15', status: 'completed' },
                { name: 'December 2024 Performance Summary', type: 'Performance', generated: '2025-01-10', status: 'completed' },
                { name: 'Annual Compliance Review 2024', type: 'Compliance', generated: '2025-01-05', status: 'completed' },
                { name: 'Regional Analysis - Northern States', type: 'Performance', generated: '2025-01-03', status: 'processing' },
                { name: 'Carbon Footprint Assessment 2024', type: 'Impact', generated: '2024-12-28', status: 'completed' }
              ].map((report, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{report.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.type === 'Impact' ? 'bg-green-100 text-green-800' :
                      report.type === 'Performance' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.generated}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      report.status === 'completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {report.status === 'completed' && (
                        <>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <FileText className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {report.status === 'processing' && (
                        <span className="text-yellow-600">
                          <Clock className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Scheduling */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Scheduled Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Automated Reports</h3>
            <div className="space-y-3">
              {[
                { name: 'Weekly Performance Summary', frequency: 'Every Monday', nextRun: '2025-01-27' },
                { name: 'Monthly Impact Report', frequency: 'First of each month', nextRun: '2025-02-01' },
                { name: 'Quarterly Compliance Review', frequency: 'Every quarter', nextRun: '2025-04-01' }
              ].map((scheduled, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="font-medium text-gray-800">{scheduled.name}</div>
                  <div className="text-sm text-gray-600">{scheduled.frequency}</div>
                  <div className="text-xs text-blue-600">Next: {scheduled.nextRun}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Custom Report Builder</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Performance Analysis</option>
                  <option>Environmental Impact</option>
                  <option>Compliance Review</option>
                  <option>Custom Dashboard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Last 30 days</option>
                  <option>Last quarter</option>
                  <option>Last year</option>
                  <option>Custom range</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Regions</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All regions</option>
                  <option>Northern states</option>
                  <option>Southern states</option>
                  <option>Custom selection</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Generate Custom Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPolicy = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Policy Management</h1>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Policy
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Policy Library
          </button>
        </div>
      </div>

      {/* Policy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Policies</p>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Under Review</p>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Draft Policies</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Compliance Rate</p>
              <p className="text-2xl font-bold text-purple-600">85.7%</p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Active Policies */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current Environmental Policies</h2>
        <div className="space-y-4">
          {[
            {
              id: 1,
              title: 'Mandatory Environmental Education Curriculum',
              description: 'All schools must integrate environmental education into their curriculum with minimum 2 hours per week.',
              status: 'active',
              compliance: 89,
              effectiveDate: '2024-04-01',
              schools: 4567,
              priority: 'critical'
            },
            {
              id: 2,
              title: 'Green Campus Certification Program',
              description: 'Schools must achieve Green Campus certification within 2 years of policy implementation.',
              status: 'active',
              compliance: 67,
              effectiveDate: '2024-06-15',
              schools: 3234,
              priority: 'high'
            },
            {
              id: 3,
              title: 'Student Environmental Impact Assessment',
              description: 'Annual assessment of student environmental activities and real-world impact measurement.',
              status: 'review',
              compliance: 0,
              effectiveDate: '2025-04-01',
              schools: 0,
              priority: 'medium'
            },
            {
              id: 4,
              title: 'Digital Environmental Learning Platform',
              description: 'Mandatory adoption of approved digital platforms for environmental education delivery.',
              status: 'active',
              compliance: 92,
              effectiveDate: '2024-01-15',
              schools: 4893,
              priority: 'critical'
            }
          ].map((policy) => (
            <div key={policy.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{policy.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      policy.status === 'active' ? 'bg-green-100 text-green-700' :
                      policy.status === 'review' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {policy.status}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      policy.priority === 'critical' ? 'bg-red-100 text-red-700' :
                      policy.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {policy.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{policy.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Effective Date:</span>
                      <div className="font-medium">{policy.effectiveDate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Schools Affected:</span>
                      <div className="font-medium">{policy.schools.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Compliance Rate:</span>
                      <div className="font-medium text-green-600">{policy.compliance}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <div className="font-medium capitalize">{policy.status}</div>
                    </div>
                  </div>
                  {policy.status === 'active' && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Implementation Progress</span>
                        <span>{policy.compliance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            policy.compliance >= 80 ? 'bg-green-500' :
                            policy.compliance >= 60 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${policy.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Categories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Policy Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: 'Curriculum Standards', policies: 4, compliance: 89, color: 'bg-blue-100 text-blue-700' },
            { category: 'Infrastructure Requirements', policies: 3, compliance: 76, color: 'bg-green-100 text-green-700' },
            { category: 'Assessment & Evaluation', policies: 2, compliance: 92, color: 'bg-purple-100 text-purple-700' },
            { category: 'Partnership Guidelines', policies: 3, compliance: 68, color: 'bg-orange-100 text-orange-700' }
          ].map((cat, index) => (
            <div key={index} className={`p-4 rounded-lg ${cat.color}`}>
              <h3 className="font-semibold mb-3">{cat.category}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Active Policies:</span>
                  <span className="font-medium">{cat.policies}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Compliance:</span>
                  <span className="font-medium">{cat.compliance}%</span>
                </div>
                <div className="w-full bg-white bg-opacity-50 rounded-full h-2 mt-2">
                  <div 
                    className="bg-current h-2 rounded-full opacity-70"
                    style={{ width: `${cat.compliance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGovSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Government Settings</h1>
        <div className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">System-wide configuration</span>
        </div>
      </div>

      {/* System Configuration */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">System Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue="EcoLearn India"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">System Version</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue="v2.1.0"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>English</option>
              <option>Hindi</option>
              <option>Multi-language</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>IST (UTC +5:30)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Regional Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Regional Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Regions</label>
            <div className="space-y-2">
              {['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal'].map((region) => (
                <div key={region} className="flex items-center">
                  <input 
                    type="checkbox" 
                    id={region}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor={region} className="ml-2 text-sm text-gray-700">{region}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Regional Coordinators</label>
            <div className="space-y-3">
              {[
                { region: 'Northern Region', coordinator: 'Dr. Rajesh Kumar' },
                { region: 'Southern Region', coordinator: 'Ms. Priya Sharma' },
                { region: 'Western Region', coordinator: 'Prof. Amit Patel' },
                { region: 'Eastern Region', coordinator: 'Dr. Kavita Singh' }
              ].map((item, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-gray-800">{item.region}</div>
                  <div className="text-gray-600">{item.coordinator}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Policy Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Policy Configuration</h2>
        <div className="space-y-4">
          {[
            { id: 'auto-compliance', label: 'Automatic compliance monitoring', description: 'Enable real-time monitoring of policy compliance across all institutions' },
            { id: 'mandatory-reporting', label: 'Mandatory monthly reporting', description: 'Require all institutions to submit monthly progress reports' },
            { id: 'impact-verification', label: 'Third-party impact verification', description: 'Enable NGO verification of environmental impact claims' },
            { id: 'public-dashboards', label: 'Public transparency dashboards', description: 'Make aggregated performance data publicly accessible' },
            { id: 'automated-alerts', label: 'Automated compliance alerts', description: 'Send automatic notifications for policy violations or deadlines' }
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

      {/* Data & Privacy Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Data & Privacy Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention Period</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>5 years</option>
              <option>7 years</option>
              <option>10 years</option>
              <option>Indefinite</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data Export Format</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>CSV</option>
              <option>JSON</option>
              <option>Excel</option>
              <option>PDF Reports</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Access Level</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Full Access</option>
              <option>Regional Access</option>
              <option>Read-only Access</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Save Configuration
        </button>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'regions':
        return renderRegions();
      case 'analytics':
        return renderAnalytics();
      case 'reports':
        return renderReports();
      case 'policy':
        return renderPolicy();
      case 'settings':
        return renderGovSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        title="Government Oversight"
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

export default GovDashboard;