
import Auctioncard from "../../Components/Auctioncard"
const AuctionPage = () => {
  return (
    <>

    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8 mt-4 font-secondary px-4">Featured Auctions </h1>
    <div className=" px-3 grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-1 place-items-center lg:grid-cols-4 lg:gap-8">
    

    
    <Auctioncard/>
   
  </div>
    </>
  )
}

export default AuctionPage