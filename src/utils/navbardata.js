import { RiAuctionFill } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";
import { FaHandPointDown, FaUserCheck } from "react-icons/fa";

export const menu = [
  { name: "Auctions", path: "/auctions", icon: RiAuctionFill },
  { name: "Categories", path: "/categories", icon: BiSolidCategory },
  { name: "Create Auction", path: "/create-auction", role: "Auctioneer", icon: IoMdCreate },
  { name: "My Auctions", path: "/my-auctions", role: "Auctioneer", icon: FaHandPointDown },
  { name: "Leaderboard", path: "/leaderboard", role: "Auctioneer", icon: MdOutlineBarChart }, // Fixed duplicate path
  { name: "Profile", path: "/profile", icon: FaUserCheck },
];



const categories = [
  {
    name: "Electronics",
    img: "https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg", // Example: Google logo, replace with relevant image
    link: "/categories/electronics",
  },
  {
    name: "Fashion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjgYH8jUc0T5Uvo8GieVuurmk_RcraPouUg&s", // Example
    link: "/categories/fashion",
  },
  
  {
    name: "Art & Collectibles",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/art-collectibles",
  },
  {
    name: "Sports & Outdoors",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/sports-outdoors",
  },

  {
    name: "Toys & Hobbies",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/toys-hobbies",
  },
  {
    name: "Jewelry & Watches",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/jewelry-watches",
  },
  {
    name: "Health & Beauty",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/health-beauty",
  },
  {
    name: "Books & Media",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQp9osjbniC3i9HHTNq-olMW5ob0GNhJqquoVHnMKhaAgYw1RGNqC7jmGFTaDH-0rSOuXW_kZ72CkmMOvecWvk2cguLG4iuYGVIXklojOES_xgf7IFUHnUqI9E", // Example
    link: "/categories/books-media",
  },
 
];

export default categories;