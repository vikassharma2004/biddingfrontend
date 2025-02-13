import { useEffect } from "react";
import AuctionPage from "../Auction/AuctionPage";
import Auctiontoday from "../Auction/Auctiontoday";
import Hero from "./Hero";
import { useUserStore } from "../../stores/User.Store";

const Home = () => {
  const { profile } = useUserStore();
  useEffect(() => {
    profile();
  }, []);
  return (
    <>
      <Hero />
      <AuctionPage />
      <Auctiontoday />
    </>
  );
};

export default Home;
