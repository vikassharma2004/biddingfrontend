import { AuctionTodayCard } from "../../Components/Auctioncard"



const Auctiontoday = () => {
  return (
   <>
   <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white px-5 m-3">Upcoming Auctions </h1>
    <div className=" px-3 grid  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-1 place-items-center lg:grid-cols-3 lg:gap-8">

        <AuctionTodayCard/>
        <AuctionTodayCard/> 
        <AuctionTodayCard/> 
        <AuctionTodayCard/> 
    </div>
    




   </>
  )
}

export default Auctiontoday