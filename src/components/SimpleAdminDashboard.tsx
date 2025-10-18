'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/useToast';
import ToastContainer from './ToastContainer';
import ConfirmationModal from './ConfirmationModal';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service: string;
  budget: string;
  timeline: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  adminNotes?: Array<{
    note: string;
    addedBy: string;
    addedAt: string;
  }>;
}

interface Payment {
  _id: string;
  customerName: string;
  customerEmail: string;
  packageName: string;
  packagePrice: number;
  status: 'succeeded' | 'pending' | 'failed' | 'canceled';
  paymentIntentId: string;
  sessionId: string;
  chargeId?: string;
  createdAt: string;
  paidAt?: string;
  order?: {
    _id: string;
    orderNumber: string;
    status: string;
    serviceStartDate?: string;
    serviceEndDate?: string;
  };
}

const SimpleAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'payments'>('contacts');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [filters, setFilters] = useState({
    status: ''
  });
  
  const { user, logout } = useAuth();
  const router = useRouter();
  const { toasts, showSuccess, showError, showWarning, removeToast } = useToast();

  // Real payments data from backend
  const [payments, setPayments] = useState<Payment[]>([]);
  const [paymentsLoading, setPaymentsLoading] = useState(false);
  const [paymentsError, setPaymentsError] = useState<string | null>(null);
  const [paymentStats, setPaymentStats] = useState({
    totalRevenue: 0,
    statusCounts: {
      succeeded: 0,
      pending: 0,
      failed: 0,
      canceled: 0
    },
    recentPayments: 0
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.sparknexora.com/api';

  // Fetch payments from backend
  const fetchPayments = useCallback(async () => {
    setPaymentsLoading(true);
    setPaymentsError(null);
    
    try {
      const token = localStorage.getItem('authToken');
      console.log('🔑 Auth Token:', token ? 'Present' : 'Missing');
      console.log('🌐 API URL:', API_BASE_URL);
      
      if (!token) {
        throw new Error('No authentication token found. Please log in first.');
      }
      
      const response = await fetch(`${API_BASE_URL}/admin/payments`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch payments');
      }

      const data = await response.json();
      
      if (data.success) {
        setPayments(data.data.payments);
      } else {
        throw new Error(data.message || 'Failed to fetch payments');
      }
    } catch (error) {
      console.error('Error fetching payments:', error);
      setPaymentsError(error instanceof Error ? error.message : 'Failed to fetch payments');
    } finally {
      setPaymentsLoading(false);
    }
  }, [API_BASE_URL]);

  // Fetch payment statistics
  const fetchPaymentStats = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_BASE_URL}/admin/payments/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch payment stats');
      }

      const data = await response.json();
      
      if (data.success) {
        setPaymentStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching payment stats:', error);
    }
  }, [API_BASE_URL]);

  // Fetch contacts from live backend
  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      if (filters.status) queryParams.append('status', filters.status);

      const response = await fetch(`${API_BASE_URL}/contact?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch contacts');
      
      const data = await response.json();
      setContacts(data.data?.contacts || data.data || []);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, filters.status]);

  // Update contact status using live backend
  const updateStatus = async (contactId: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchContacts(); // Refresh the list
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // Handle delete confirmation
  const handleDeleteClick = (contact: Contact) => {
    setContactToDelete(contact);
    setShowDeleteModal(true);
  };

  // Delete contact using live backend
  const deleteContact = async () => {
    if (!contactToDelete) return;

    try {
      const response = await fetch(`${API_BASE_URL}/contact/${contactToDelete._id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchContacts(); // Refresh the list
        setShowDeleteModal(false);
        setContactToDelete(null);
        showSuccess('Contact Deleted', 'The contact message has been successfully deleted.');
      } else {
        showError('Delete Failed', 'Failed to delete contact. Please try again.');
      }
    } catch (err) {
      console.error('Error deleting contact:', err);
      showError('Delete Failed', 'Failed to delete contact. Please try again.');
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setContactToDelete(null);
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Handle logout
  const handleLogout = async () => {
    try {
      // Call backend logout if needed
      const token = localStorage.getItem('authToken');
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, { 
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      }
      logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Still logout locally even if API call fails
      logout();
      router.push('/login');
    }
  };


  // Load contacts on mount and when filters change
  useEffect(() => {
    fetchContacts();
  }, [filters, fetchContacts]);

  // Fetch payments when payments tab is active
  useEffect(() => {
    if (activeTab === 'payments') {
      fetchPayments();
      fetchPaymentStats();
    }
  }, [activeTab, fetchPayments, fetchPaymentStats]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'succeeded': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'canceled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'payoneer': return '💳';
      case 'stripe': return '💳';
      case 'paypal': return '🅿️';
      case 'bank_transfer': return '🏦';
      default: return '💳';
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  if (loading && activeTab === 'contacts') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
      <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center mr-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Spark Nexora</h1>
                  <p className="text-xs text-gray-500">Admin Panel</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-600">
                  {activeTab === 'contacts' 
                    ? 'Manage your contact form submissions' 
                    : 'Track payments and transactions'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {activeTab === 'contacts' 
                  ? `${contacts.length} message${contacts.length !== 1 ? 's' : ''}`
                  : `${payments.length} payment${payments.length !== 1 ? 's' : ''}`
                }
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-600">
                  Welcome, <span className="font-medium">{user?.name || 'Admin'}</span>
                </div>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'contacts'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Contact Messages
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'payments'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Payments
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters - Only for Contacts */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Status</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setFilters({ status: '' })}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && activeTab === 'contacts' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="text-red-400">⚠️</div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contacts Tab Content */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {contacts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-4xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
              <p className="text-gray-500">No contact messages match your current filters.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact._id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900 truncate">
                          {contact.name}
                        </h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                          {contact.status}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(contact.priority)}`}>
                          {contact.priority}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        <p><strong>Email:</strong> {contact.email}</p>
                        {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
                        {contact.company && <p><strong>Company:</strong> {contact.company}</p>}
                        <p><strong>Service:</strong> {contact.service}</p>
                        <p><strong>Subject:</strong> {contact.subject}</p>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                        {contact.message}
                      </p>
                      
                      <div className="text-xs text-gray-500">
                        Received: {formatDate(contact.createdAt)}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <select
                        value={contact.status}
                        onChange={(e) => updateStatus(contact._id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="closed">Closed</option>
                      </select>
                      
                      <button
                        onClick={() => {
                          setSelectedContact(contact);
                          setShowModal(true);
                        }}
                        className="text-primary-600 hover:text-primary-800 text-xs px-2 py-1"
                      >
                        View Details
                      </button>
                      
                      <button
                        onClick={() => handleDeleteClick(contact)}
                        className="text-red-600 hover:text-red-800 text-xs px-2 py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          </div>
        )}

        {/* Payments Tab Content */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            {/* Total Revenue Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">💰</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {formatCurrency(paymentStats.totalRevenue, 'USD')}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Payments List */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {paymentsLoading ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading payments...</p>
                </div>
              ) : paymentsError ? (
                <div className="text-center py-12">
                  <div className="text-red-400 text-4xl mb-4">⚠️</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Payments</h3>
                  <p className="text-gray-500">{paymentsError}</p>
                  <button
                    onClick={fetchPayments}
                    className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                  >
                    Try Again
                  </button>
                </div>
              ) : payments.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-4xl mb-4">💳</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No payments found</h3>
                  <p className="text-gray-500">No payment records available.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {payments.map((payment, index) => (
                    <motion.div
                      key={payment._id}
                      className="p-6 hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900 truncate">
                              {payment.customerName}
                            </h3>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(payment.status)}`}>
                              {payment.status}
                            </span>
                          
                            {payment.order && (
                              <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                                Order: {payment.order.orderNumber}
                              </span>
                            )}
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-2">
                            <p><strong>Email:</strong> {payment.customerEmail}</p>
                            <p><strong>Package:</strong> {payment.packageName}</p>
                          </div>
                          
                          <div className="text-sm text-gray-700 mb-2">
                            <p className="text-lg font-semibold text-green-600">
                              {formatCurrency(payment.packagePrice, 'USD')}
                            </p>
                          </div>
                          
                          <div className="text-xs text-gray-500">
                            <p>Created: {formatDate(payment.createdAt)}</p>
                            {payment.paidAt && (
                              <p>Completed: {formatDate(payment.paidAt)}</p>
                            )}
                           
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => {
                              setSelectedPayment(payment);
                              setShowPaymentModal(true);
                            }}
                            className="text-primary-600 hover:text-primary-800 text-xs px-3 py-1 border border-primary-300 rounded hover:bg-primary-50"
                          >
                            View Details
                          </button>
                          {payment.status === 'pending' && (
                            <button
                              className="text-green-600 hover:text-green-800 text-xs px-3 py-1 border border-green-300 rounded hover:bg-green-50"
                            >
                              Mark Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Contact Details Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Contact Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <p className="text-gray-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">{selectedContact.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900">{selectedContact.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Company</label>
                    <p className="text-gray-900">{selectedContact.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Service</label>
                    <p className="text-gray-900">{selectedContact.service}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Budget</label>
                    <p className="text-gray-900">{selectedContact.budget}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Timeline</label>
                    <p className="text-gray-900">{selectedContact.timeline}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedContact.status)}`}>
                      {selectedContact.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <p className="text-gray-900">{selectedContact.subject}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Received</label>
                  <p className="text-gray-900">{formatDate(selectedContact.createdAt)}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    updateStatus(selectedContact._id, 'replied');
                    setShowModal(false);
                  }}
                  className="px-4 py-2 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700"
                >
                  Mark as Replied
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && contactToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Delete Contact Message</h2>
                  <p className="text-sm text-gray-600">This action cannot be undone.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2">
                  Are you sure you want to delete the message from <strong>{contactToDelete.name}</strong>?
                </p>
                <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-600">
                  <p><strong>Email:</strong> {contactToDelete.email}</p>
                  <p><strong>Subject:</strong> {contactToDelete.subject}</p>
                  <p><strong>Service:</strong> {contactToDelete.service}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteContact}
                  className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to logout? You will need to login again to access the admin dashboard."
        confirmText="Logout"
        cancelText="Cancel"
        type="warning"
      />

      {/* Payment Details Modal */}
      {showPaymentModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Payment Status */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Payment Status</h3>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getPaymentStatusColor(selectedPayment.status)}`}>
                      {selectedPayment.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(selectedPayment.packagePrice, 'USD')}
                    </p>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Name</label>
                        <p className="text-gray-900">{selectedPayment.customerName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <p className="text-gray-900">{selectedPayment.customerEmail}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Package</label>
                        <p className="text-gray-900">{selectedPayment.packageName}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Amount</label>
                        <p className="text-gray-900 font-semibold text-lg text-green-600">
                          {formatCurrency(selectedPayment.packagePrice, 'USD')}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Payment Method</label>
                        <p className="text-gray-900">Stripe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Status</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(selectedPayment.status)}`}>
                          {selectedPayment.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Information */}
                {selectedPayment.order && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Information</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Order Number</label>
                          <p className="text-gray-900 font-semibold">{selectedPayment.order.orderNumber}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Order Status</label>
                          <p className="text-gray-900">{selectedPayment.order.status}</p>
                        </div>
                        {selectedPayment.order.serviceStartDate && (
                          <div>
                            <label className="text-sm font-medium text-gray-500">Service Start Date</label>
                            <p className="text-gray-900">{formatDate(selectedPayment.order.serviceStartDate)}</p>
                          </div>
                        )}
                        {selectedPayment.order.serviceEndDate && (
                          <div>
                            <label className="text-sm font-medium text-gray-500">Service End Date</label>
                            <p className="text-gray-900">{formatDate(selectedPayment.order.serviceEndDate)}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SimpleAdminDashboard;
