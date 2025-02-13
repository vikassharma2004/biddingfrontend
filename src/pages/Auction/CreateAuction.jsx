import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const AuctionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    condition: "",
    startingPrice: "",
    startTime: "",
    endTime: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validation check
  
   

    setError(""); // Clear error if valid

    // Prepare form data for submission
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // API request to upload data (Replace with your API)
    try {
        // Send the FormData object to the backend
        const result = await axios.post(
          "/auctions/create",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensure the backend knows it's a file upload
            },
          }
        );
  
     toast.success( result.data.message);
      } catch (error) {
        toast.error( error.response.data.message || error);
       
      }

    // Example: axios.post("/api/auction", formDataToSend).then(...).catch(...)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create Auction</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded-md" required />

          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded-md" required />

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded-md" required />

          <input type="text" name="condition" value={formData.condition} onChange={handleChange} placeholder="Condition" className="w-full p-2 border rounded-md" required />

          <input type="number" name="startingPrice" value={formData.startingPrice} onChange={handleChange} placeholder="Starting Price" className="w-full p-2 border rounded-md" required />

          <input type="datetime-local" name="startTime" value={formData.startTime} onChange={handleChange} className="w-full p-2 border rounded-md" required />

          <input type="datetime-local" name="endTime" value={formData.endTime} onChange={handleChange} className="w-full p-2 border rounded-md" required />

          <div className="mb-2">
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-md" required />
          </div>

          {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md mb-2" />}

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
            Submit Auction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuctionForm;
