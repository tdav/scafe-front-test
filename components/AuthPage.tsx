import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { LoginFormData, RegisterFormData, User } from '../types';

interface AuthPageProps {
  onAuthenticate: (user: User) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthenticate }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLogin = (data: LoginFormData) => {
    // Mock authentication - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      username: data.email.split('@')[0],
      email: data.email,
    };
    onAuthenticate(mockUser);
  };

  const handleRegister = (data: RegisterFormData) => {
    // Mock registration - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      username: data.username,
      email: data.email,
    };
    onAuthenticate(mockUser);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md px-6">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200 mb-4">
            <LayoutGrid size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Restoe POS
          </h1>
          <p className="text-gray-600">
            {isLoginMode ? 'Welcome back! Sign in to continue.' : 'Create your account to get started.'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isLoginMode ? 'Sign In' : 'Sign Up'}
          </h2>
          
          {isLoginMode ? (
            <LoginForm 
              onLogin={handleLogin}
              onSwitchToRegister={() => setIsLoginMode(false)}
            />
          ) : (
            <RegisterForm 
              onRegister={handleRegister}
              onSwitchToLogin={() => setIsLoginMode(true)}
            />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          © 2024 Restoe POS. All rights reserved.
        </div>
      </div>
    </div>
  );
};
