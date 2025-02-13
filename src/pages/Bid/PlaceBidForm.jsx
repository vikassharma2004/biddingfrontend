import  { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const PlaceBidForm = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      setError('Please enter a valid bid amount.');
      return;
    }

    try {
      const response = await axios.post(`/bids/placeBid/67aa01fdf2eaad39e285b32f`, {
        bidAmount,
      });

      if (response.status === 200) {
        setSuccessMessage('Your bid was placed successfully!');
        setBidAmount('');
      }
    } catch (err) {
       
        toast.error(err.response.data.message);
      
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">Place Your Bid</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}
      {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bidAmount" className="block text-sm font-medium mb-2">
            Bid Amount
          </label>
          <input
            type="number"
            id="bidAmount"
            name="bidAmount"
            value={bidAmount}
            onChange={handleBidAmountChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your bid amount"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Place Bid
        </button>
      </form>
    </div>
  );
};

export default PlaceBidForm;
