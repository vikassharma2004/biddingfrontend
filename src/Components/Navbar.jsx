import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { menu } from "../utils/navbardata";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/User.Store";

const Navbar = () => {
  const {user}=useUserStore()
  console.log(user);
  
  
  const [isOpen, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="w-full flex items-center justify-between  text-white bg-white/6 shadow-lg shadow-[rgba(31,38,135,0.37)] backdrop-blur-[5.5px] border border-white/20 rounded-[30px] px-4 ">
          {/* Logo section */}
          <Link
            to="/"
            className="p-3 flex items-center gap-3 text-xl font-secondary font-semibold cursor-pointer"
          >
            <img
              src="/logo.webp" // Updated path
              alt="logo"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <p>BidMate</p>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:block z-20">
            <ul className="flex items-center gap-6 font-secondary text-md">
              {menu
                .filter((item) => !item.role || item.role === user?.role)
                .map((item) => (
                  <li key={item.path} className="relative group">
                    <a href={item.path} className="hover:text-gray-600">
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* CTA button section */}
          <div className="hidden gap-6  lg:block space-x-4 font-secondary   ">
            <Link to={"/register"} className="font-semibold">Sign in</Link>
            <Link to={"/login"} className="text-white bg-gray-700 font-semibold rounded-full px-6 py-2 bg-gradient-to-b from-black  to-gray-800 hover:shadow-lg shadow-[rgba(31,38,135,0.37)]  border  border-[rgba(31,38,135,0.37)] "> 
              Register
            </Link>
          </div>

          {/* Mobile hamburger menu section */}
          <div className="lg:hidden" onClick={handleToggle}>
            <MdMenu className="text-4xl" aria-label="Toggle menu" />
          </div>

          {/* Mobile menu */}
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
