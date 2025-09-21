import React from 'react';
import { Leaf, TreePine, Flower2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <TreePine className="w-12 h-12 text-green-600 animate-bounce" />
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-spin">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <Flower2 className="w-12 h-12 text-blue-500 animate-bounce delay-300" />
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            EcoLearn India
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="flex space-x-2 justify-center mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
        </div>

        <p className="text-gray-600 text-lg">Loading your environmental journey...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;