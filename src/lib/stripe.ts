import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Payment service functions
export const createCheckoutSession = async (paymentData: {
  packageName: string;
  packagePrice: number;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  billingAddress?: any;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Failed to create checkout session');
    }

    return data.data;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const getPaymentStatus = async (sessionId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/status/${sessionId}`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Failed to get payment status');
    }

    return data.data;
  } catch (error) {
    console.error('Error getting payment status:', error);
    throw error;
  }
};
