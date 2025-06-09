import { useState, useEffect, useContext } from "react";
// import resList from "../utils/mockData";
import RestaurantCard, { OfferCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurant, setListofResturent] = useState([]);
  const [filterResturant, setFilterResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

const {loggedInUser,setUserName} = useContext(UserContext);
   
  const ResWithOffer = OfferCard(RestaurantCard);

  //console.log("Body Render", listOfRestaurant);
  useEffect(() => {
    console.log("Use Effect Called");

    fetchData();

    return () => {
      console.log("use Effect Return");
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3242912&lng=78.59376220000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log("hello12");

    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListofResturent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //console.log(listOfRestaurant);
  // if(listOfRestaurant.length === 0)
  // {
  //    return <Shimmer />

  // }

  if (onlineStatus == false) {
    return (
      <h1>It's Loke You offline ! Please check your Interner Connection.</h1>
    );
  }
   
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-green-100"
          onClick={() => {
            console.log(listOfRestaurant);
            const filterSearch = listOfRestaurant.filter((res) => {
              //console.log(res.info.name)
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            console.log(filterSearch);
            setFilterResturant(filterSearch);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn p-2 m-2 bg-green-100"
          onClick={() => {
            const filterListRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.1
            );

            //console.log(filterListRes);
            setFilterResturant(filterListRes);
          }}
        >
          Top Rated Restaurant
        </button>
          <label className="mx-2" >UserName:</label>
         <input className="border border-black p-2"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap container">
        {filterResturant.map((resdata) =>
        
          resdata?.info?.aggregatedDiscountInfoV3?.header ? (
            <ResWithOffer key={resdata.info.id} resData={resdata} />
          ) : (
            <RestaurantCard key={resdata.info.id} resData={resdata} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
