import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import ConfirmDialog from './ConfirmDialog';

const Navbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem('adminToken');
    setShowLogoutConfirm(false);
    navigate('/admin/login');
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="relative flex items-center justify-between h-16">
            {/* Left section with menu button */}
            <div className="absolute left-0 inset-y-0 flex items-center pl-2">
              <button
                onClick={onToggleSidebar}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>

            {/* Center section with title */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-xl font-semibold text-gray-800">Mess Management</h1>
            </div>

            {/* Right section with logout button */}
            <div className="absolute right-0 inset-y-0 flex items-center pr-2">
              <button
                onClick={handleLogoutClick}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ConfirmDialog
        isOpen={showLogoutConfirm}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setShowLogoutConfirm(false)}
      />
    </>
  );
};

export default Navbar; 