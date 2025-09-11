'use client';

import { motion } from 'framer-motion';

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

interface AnalyticsChartProps {
  stats: DashboardStats;
}

const AnalyticsChart = ({ stats }: AnalyticsChartProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getServiceColor = (index: number) => {
    const colors = [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    return colors[index % colors.length];
  };

  const maxPriorityCount = Math.max(...stats.priorityStats.map(p => p.count));
  const maxServiceCount = Math.max(...stats.serviceStats.map(s => s.count));

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
        <p className="text-sm text-gray-500">Contact insights and trends</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Priority Distribution */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Priority Distribution</h4>
          <div className="space-y-2">
            {stats.priorityStats.map((priority, index) => (
              <motion.div
                key={priority._id}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(priority._id)}`}></div>
                  <span className="text-sm text-gray-600 capitalize">{priority._id}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${getPriorityColor(priority._id)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(priority.count / maxPriorityCount) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8 text-right">
                    {priority.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Distribution */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Top Services</h4>
          <div className="space-y-2">
            {stats.serviceStats.slice(0, 5).map((service, index) => (
              <motion.div
                key={service._id}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getServiceColor(index)}`}></div>
                  <span className="text-sm text-gray-600 truncate max-w-24">{service._id}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${getServiceColor(index)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(service.count / maxServiceCount) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8 text-right">
                    {service.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Daily Activity */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
          <div className="flex items-end space-x-1 h-16">
            {stats.dailyStats.slice(-7).map((day, index) => {
              const maxCount = Math.max(...stats.dailyStats.map(d => d.count));
              const height = (day.count / maxCount) * 100;
              
              return (
                <motion.div
                  key={`${day._id.year}-${day._id.month}-${day._id.day}`}
                  className="flex-1 bg-primary-100 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-full bg-primary-500 rounded-t"></div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>7 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">
              {stats.overview.recentContacts}
            </div>
            <div className="text-xs text-gray-500">This Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {stats.overview.monthlyContacts}
            </div>
            <div className="text-xs text-gray-500">This Month</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsChart;
