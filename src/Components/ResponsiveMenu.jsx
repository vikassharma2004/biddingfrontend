import { menu } from "../utils/navbardata";

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ isOpen }) => {
    
    const User = { role: "auctioneer" };
    return (
      <>
        {isOpen ? (
          <div className="absolute top-17 w-full h-[700px] z-20 lg:hidden  bg-gradient-to-b from-black to-gray-800  border-b border-white  overflow-x-hidden overflow-y-auto rounded-2xl ml-0.5">
            <div className="text-sm font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col gap-10  items-start">
                {menu
                .filter((item) => !item.role || item.role === User.role).map((item) => (
                 <li key={item.name} className="flex items-center gap-3 w-full px-8  py-5 rounded-2xl hover:shadow-lg shadow-[rgba(31,38,135,0.37)]  border  border-[rgba(31,38,135,0.37)]">
                 { <item.icon /> }
                   <a href={item.path}>{item.name}</a>
                 </li>
               ))}
              </ul>
            </div>
          </div>
        ) : null}
      </>
    );
  };
  
  export default ResponsiveMenu;
  