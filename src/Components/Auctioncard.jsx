import "react";
import Button from "./Button.jsx";
export function Auctioncard() {
  return (
 
<>

<div className="w-full  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">

  <img 
    className="p-8 rounded-t-lg object-contain " 
    src="https://www.maketecheasier.com/assets/uploads/2023/08/Control-Center-On-Off-Apple-Watch.jpg" 
    alt="product image" 
  />
  



    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
       
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            

           <Button name="place Bid"/>
          
        </div>
    </div>
</div>
</>

  );
}

export const AuctionTodayCard = () => {
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU="
        alt="Auction Item"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
};

 


export default Auctioncard;
