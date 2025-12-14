import React from 'react';
import { 
  LayoutGrid, 
  ChefHat, 
  Wallet, 
  Clock, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <div className="w-20 bg-white h-screen flex flex-col items-center py-6 border-r border-gray-100 flex-shrink-0">
      {/* Logo */}
      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-8 shadow-sm">
        <LayoutGrid size={24} />
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-6 flex-1 w-full items-center">
        <button className="w-12 h-12 flex items-center justify-center text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-200 transition-all">
          <LayoutGrid size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
          <ChefHat size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
          <Wallet size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
          <Clock size={24} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
          <Settings size={24} />
        </button>
      </div>

      {/* Logout */}
      <button 
        onClick={onLogout}
        className="w-12 h-12 flex items-center justify-center text-red-400 hover:bg-red-50 rounded-xl mt-auto transition-all"
      >
        <LogOut size={24} />
      </button>
    </div>
  );
};