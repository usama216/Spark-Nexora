'use client';

import { motion } from 'framer-motion';

interface StatsOverviewProps {
  stats: {
    totalContacts: number;
    newContacts: number;
    readContacts: number;
    repliedContacts: number;
    closedContacts: number;
    recentContacts: number;
    monthlyContacts: number;
  };
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  const statCards = [
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: '👥',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      change: null
    },
    {
      title: 'New Messages',
      value: stats.newContacts,
      icon: '📧',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      change: stats.recentContacts > 0 ? `+${stats.recentContacts} this week` : null
    },
    {
      title: 'Read',
      value: stats.readContacts,
      icon: '👁️',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      change: null
    },
    {
      title: 'Replied',
      value: stats.repliedContacts,
      icon: '💬',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      change: null
    },
    {
      title: 'Closed',
      value: stats.closedContacts,
      icon: '✅',
      color: 'bg-gray-500',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      change: null
    },
    {
      title: 'This Month',
      value: stats.monthlyContacts,
      icon: '📅',
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      change: null
    }
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {statCards.map((card, index) => (
        <motion.div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
              <motion.p
                className="text-3xl font-bold text-gray-900"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                {card.value}
              </motion.p>
              {card.change && (
                <p className="text-xs text-green-600 mt-1 font-medium">{card.change}</p>
              )}
            </div>
            <motion.div
              className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl">{card.icon}</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsOverview;
