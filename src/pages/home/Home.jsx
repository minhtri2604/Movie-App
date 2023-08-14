
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Horror from "./horror/Horror";
const Home = () => {
  return (
    <div className=" flex flex-col ">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Horror />
    </div>
  );
};

export default Home;
