import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data,showItems,setShowIndex }) => {
//   console.log(data);

  const { itemCards } = data;
 //console.log(itemCards);
//  const [showItems,setShowItems] = useState(false);

 const handleClick = (()=>{
    setShowIndex();
    //setShowItems(!showItems);
    // if(showItems==false)
    // {
    //     setShowItems(true);
    // }
    // else{
    //      setShowItems(false);
    // }
       
 })
  return (
    <div className="contents">
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} {`(${itemCards.length})`}
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList key={itemCards?.card?.info?.id} items={itemCards} />}
      </div>

      {/* accordions body */}
    </div>
  );
};

export default RestaurantCategories;
