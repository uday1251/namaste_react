import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
//   console.log("uday");
//   console.log(items);

const dispatch = useDispatch();
const handleAddBtn =  (item) => {
  // Deptch an action
    dispatch(addItem(item));
    console.log(item);
    
};
  return ( 
    <div>
      {items.map((item) => {
        //console.log("yda", item?.card?.info);
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 flex"
          >
            <div className="w-9/12 flex-col">
              <div className="">
                <span className="text-lg font-bold">
                  {item?.card?.info?.name}
                </span>
              </div>
              <div>
                <span className="text-lg font-bold">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div>
                <p className="text-sm my-2.5 font-medium">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>

            <div className="w-3/12 flex flex-col items-center relative">
              <img
                className="w-[140px] h-[154px] rounded-xl"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />

              <button className="absolute top-2 right-2 p-2 bg-green-100 z-10 rounded" onClick={()=>handleAddBtn(item)}>
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
