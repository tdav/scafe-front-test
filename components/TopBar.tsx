import React from 'react';
import { Search, Bell } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full h-20 bg-white/50 backdrop-blur-sm flex items-center justify-between px-8 sticky top-0 z-10 border-b border-gray-100/50">
      {/* Search */}
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-200 shadow-sm sm:text-sm"
          placeholder="Search Your Menu Here"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-100">
          <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-4 rounded-sm object-cover" />
          <img src="https://flagcdn.com/w40/id.png" alt="Indonesian" className="w-6 h-4 rounded-sm object-cover opacity-50 grayscale" />
        </div>
        
        <button className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-sm border border-gray-100">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800 leading-tight">Courtney Henry</span>
            <span className="text-xs text-gray-400">Casher 1st Shift</span>
          </div>
        </div>
      </div>
    </div>
  );
};