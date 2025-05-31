import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurentMenu = () => {
  //const [resinfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resinfo = useRestaurentMenu(resId);
  const [showIndex,setShowIndex] = useState(0);
  console.log(showIndex);

  //console.log(resinfo);
  //   console.log(resId);
  //   useEffect(() => {
  //     fetchMenuData();
  //   }, []);

  //   const fetchMenuData = async () => {
  //      const data = await fetch(`${Menu_API_URL}${resId}`);

  //       const JsonData = await data.json();

  //     setResInfo(JsonData);
  //     //console.log(JsonData?.data?.cards[2]?.card?.card?.info);
  //   };

  if (resinfo == null) return <Shimmer />;

  //console.log(resinfo?.data?.cards[2]?.card?.card?.info);
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = resinfo?.data?.cards[2]?.card?.card?.info;
  
   //console.log(resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   const allcards = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
   let categories = [];
   if(Array.isArray(allcards))
   {
        categories = allcards.filter((c) => {
        //console.log(c?.card?.card?.["@type"]);
        return  c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

      })
        
   }
   //console.log(categories);

 
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold my-3 p-2 text-left">{name}</h1>
      {/* <p>{cuisines.join(", ")} - {costForTwoMessage}</p> */}
      <div className="rounded-[20px] border border-[rgba(2,6,12,0.15)] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)] p-[10px]">
        <div className="flex my-5 mx-4">
          <div className="rating font-mono font-semibold text-lg text-[#2f2f2f]">{`Rating : ${avgRatingString} (${totalRatingsString})`}</div>
          <div className="rating-dot font-mono font-semibold text-lg  ml-2.5">
            •
          </div>
          <div className="cost font-mono font-semibold text-lg ml-2.5 ">
            {costForTwoMessage}
          </div>
        </div>

        <div className="resta-cuisines-blk flex my-5 mx-4">
          <div className="text-[rgb(193,81,81)] font-mono font-semibold my-0 mx-0.5 text-lg">
            {cuisines.join(",")}
          </div>
        </div>

        <div className="flex my-0 mx-5 py-0 items-center">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full  bg-[rgb(196,196,196)]"></div>
            <div className="w-[1px] h-[23px] bg-[rgb(196,196,196)]"></div>
            <div className="w-2 h-2 rounded-full bg-[rgb(196,196,196)]"></div>
          </div>
          <div className="flex-col items-center justify-center w-full ml-3 pr-4">
            <div className="flex mb-0.5">
              <div className="font-mono font-semibold text-base text-[rgba(2,6,12,0.92)]">
                Outlet
              </div>
              <div className="font-mono font-extralight ml-1 text-base sc text-[rgb(2,6,12,0.6)] text-center w-max lett  tracking-[-0.35px] text-[rgba(2,6,12,0.6)]">
                {locality}
              </div>
            </div>
            <div className="font-mono font-semibold text-sm text-[rgba(2,6,12,0.92)]">
              <div className="font-mono font-semibold text-sm text-[rgba(2,6,12,0.92)] mt-2.5">
                {sla?.slaString}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  categories accordions */}
      {     
              categories.map((category,index) => (

                // Controlled Component.
              
              <RestaurantCategories key={category?.card?.card?.title} data={category?.card?.card} 
              showItems={index===showIndex? true :false}
              setShowIndex = {
                   ()=>
                   {
                       //console.log("uday");
                       //console.log(index,"dd",showIndex);
                       setShowIndex(index==showIndex? null :index);
                   }
                    
              }

              
              />
          ))
      }
      
    </div>
  );
};

export default RestaurentMenu;
