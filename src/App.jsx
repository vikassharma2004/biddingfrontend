import { Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import './App.css';
import RegistrationForm from './pages/Auth/RegistrationForm.jsx';
import LoginPage from './pages/Auth/LoginPage.jsx';
import axios from 'axios';
import AuctionForm from './pages/Auction/CreateAuction.jsx';
import Home from './pages/home/Home.jsx';
import PlaceBidForm from './pages/Bid/PlaceBidform.jsx';
import Navbar from './Components/Navbar.jsx';


const App = () => {
  axios.defaults.baseURL = "http://localhost:5000/api/v1"; // Replace with your backend URL

// Enable credentials (cookies, authorization headers, etc.)
axios.defaults.withCredentials = true;
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 ">

    <Navbar/>
      <Toaster />

      <Routes>
        <Route path='/*' element={<Home/>} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/auctioncreate' element={<AuctionForm/>} />
        <Route path='/bid' element={<PlaceBidForm/>} />
      </Routes>
      </div>
    
  );
}

export default App;




