'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import DashboardHeader from './admin/DashboardHeader';
import StatsOverview from './admin/StatsOverview';
import ContactsTable from './admin/ContactsTable';
import RecentContacts from './admin/RecentContacts';
import AnalyticsChart from './admin/AnalyticsChart';

interface DashboardStats {
  overview: {
    totalContacts: number;
    newContacts: number;
    readContacts: number;
    repliedContacts: number;
    closedContacts: number;
    recentContacts: number;
    monthlyContacts: number;
  };
  priorityStats: Array<{ _id: string; count: number }>;
  serviceStats: Array<{ _id: string; count: number }>;
  dailyStats: Array<{ _id: { year: number; month: number; day: number }; count: number }>;
}

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
  source: string;
  createdAt: string;
  formattedDate: string;
  adminNotes: Array<{
    note: string;
    addedBy: string;
    addedAt: string;
  }>;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    service: '',
    search: ''
  });

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://spark-nexora-backend.vercel.app/api';

  // Fetch dashboard statistics
  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/dashboard`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('Failed to load dashboard statistics');
    }
  }, [API_BASE_URL]);

  // Fetch contacts with pagination and filters
  const fetchContacts = useCallback(async (page = 1) => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        ...filters
      });

      const response = await fetch(`${API_BASE_URL}/contact?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch contacts');
      const data = await response.json();
      
      setContacts(data.data.contacts);
      setTotalPages(data.data.pagination.totalPages);
      setCurrentPage(page);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contacts');
    }
  }, [API_BASE_URL, filters]);

  // Fetch recent contacts
  const fetchRecentContacts = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/recent?limit=5`);
      if (!response.ok) throw new Error('Failed to fetch recent contacts');
      const data = await response.json();
      setRecentContacts(data.data);
    } catch (err) {
      console.error('Error fetching recent contacts:', err);
    }
  }, [API_BASE_URL]);

  // Update contact status
  const updateContactStatus = async (contactId: string, status: string, priority?: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, priority }),
      });

      if (!response.ok) throw new Error('Failed to update contact');
      
      // Refresh data
      fetchContacts(currentPage);
      fetchStats();
    } catch (err) {
      console.error('Error updating contact:', err);
      setError('Failed to update contact');
    }
  };

  // Add admin note
  const addAdminNote = async (contactId: string, note: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}/note`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note, addedBy: 'Admin' }),
      });

      if (!response.ok) throw new Error('Failed to add note');
      
      // Refresh contacts
      fetchContacts(currentPage);
    } catch (err) {
      console.error('Error adding note:', err);
      setError('Failed to add note');
    }
  };

  // Delete contact
  const deleteContact = async (contactId: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/contact/${contactId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete contact');
      
      // Refresh data
      fetchContacts(currentPage);
      fetchStats();
    } catch (err) {
      console.error('Error deleting contact:', err);
      setError('Failed to delete contact');
    }
  };

  // Handle filter changes
  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  // Apply filters
  const applyFilters = () => {
    fetchContacts(1);
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      service: '',
      search: ''
    });
    setCurrentPage(1);
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        fetchStats(),
        fetchContacts(),
        fetchRecentContacts()
      ]);
      setLoading(false);
    };

    loadData();
  }, [fetchStats, fetchContacts, fetchRecentContacts]);

  // Refetch contacts when filters change
  useEffect(() => {
    if (!loading) {
      fetchContacts(1);
    }
  }, [filters, fetchContacts, loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Dashboard...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Stats Overview */}
          {stats && <StatsOverview stats={stats.overview} />}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contacts Table - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <ContactsTable
                contacts={contacts}
                currentPage={currentPage}
                totalPages={totalPages}
                filters={filters}
                onFilterChange={handleFilterChange}
                onApplyFilters={applyFilters}
                onClearFilters={clearFilters}
                onUpdateStatus={updateContactStatus}
                onAddNote={addAdminNote}
                onDeleteContact={deleteContact}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Sidebar - Recent Contacts and Analytics */}
            <div className="space-y-8">
              <RecentContacts contacts={recentContacts} />
              {stats && <AnalyticsChart stats={stats} />}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
