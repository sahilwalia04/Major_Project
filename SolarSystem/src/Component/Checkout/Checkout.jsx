import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const cartTotal = localStorage.getItem('cartTotal');
    if (cartTotal) {
      setAmount(parseFloat(cartTotal));
    }
  }, []);

  const handlePayment = async () => {
    const data = {
      name: "John Doe",
      mobileNumber: 1234567890,
      amount,
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://shivamwallu.site/api/create-order', data);
      window.location.href = response.data.url;
    } catch (error) {
      setError("Payment failed. Please try again.");
      console.error("Error in payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <p className="mb-4">Total Amount: {amount}rs</p>
      <button
        onClick={handlePayment}
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;
