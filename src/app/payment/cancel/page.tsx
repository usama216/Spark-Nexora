'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const PaymentCancelPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          {/* Cancel Icon */}
          <motion.div
            className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Payment Cancelled
          </motion.h1>

          {/* Message */}
          <motion.p
            className="text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your payment was cancelled. No charges have been made to your account. 
            If you have any questions or need assistance, please don&apos;t hesitate to contact us.
          </motion.p>

          {/* Info Box */}
          <motion.div
            className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">Need Help?</h3>
                <p className="text-sm text-blue-700">
                  If you encountered any issues during checkout or need to modify your order, 
                  please contact our support team.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => router.push('/#packages')}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Try Again
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return Home
            </button>
            
            <button
              onClick={() => router.push('/#contact')}
              className="w-full text-primary-500 hover:text-primary-600 font-semibold py-2 px-4 transition-colors"
            >
              Contact Support
            </button>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-sm text-gray-500 mb-2">Common reasons for cancellation:</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Changed your mind about the purchase</li>
              <li>• Technical issues during checkout</li>
              <li>• Payment method declined</li>
              <li>• Browser or network problems</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentCancelPage;
