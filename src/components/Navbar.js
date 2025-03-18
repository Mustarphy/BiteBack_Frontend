import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon,
  UserIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cart } = useCart();
  const { currentUser, logout } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Shop Now', path: '/shop' },
    { name: 'Charity', path: '/charity' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#0E2A47] shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-500">
              <img alt='logo' src='/BiteBack.png' width={90} /> 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} to={item.path} className="text-white hover:text-green-500">
                {item.name}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-white hover:text-green-500" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Dropdown */}
            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center text-white hover:text-green-500">
                  <UserIcon className="h-6 w-6" />
                  <span>{currentUser.displayName || 'User'}</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>My Profile</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-white hover:text-green-500">Login</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0E2A47] py-3 px-5 space-y-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.path} className="block text-white hover:text-green-500" onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Cart & Profile */}
          <div className="flex items-center justify-between mt-3">
            <Link to="/cart" className="relative text-white hover:text-green-500">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center text-white hover:text-green-500">
                  <UserIcon className="h-6 w-6" />
                  <span>{currentUser.displayName || 'User'}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>My Profile</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-white hover:text-green-500">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
