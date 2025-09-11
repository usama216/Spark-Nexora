'use client';

import { motion } from 'framer-motion';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  service: string;
}

interface RecentContactsProps {
  contacts: Contact[];
}

const RecentContacts = ({ contacts }: RecentContactsProps) => {
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

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
        <p className="text-sm text-gray-500">Latest contact submissions</p>
      </div>

      <div className="p-6">
        {contacts.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-2">📭</div>
            <p className="text-gray-500">No recent messages</p>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact._id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {contact.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {contact.email}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(contact.priority)}`}>
                      {contact.priority}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                  {contact.subject}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{contact.service}</span>
                  <span>{formatTimeAgo(contact.createdAt)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {contacts.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All Messages →
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default RecentContacts;
