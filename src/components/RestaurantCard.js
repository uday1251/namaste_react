import { useContext } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
const {resData} = props;

 const {loggedInUser} = useContext(UserContext);
//console.log(resData.info);
// if (!resData?.info) {
//   return null; // Don't render anything if 'info' is not available
// }

const {id, name, cuisines, avgRating, cloudinaryImageId,locality,areaName } = resData?.info || {};
const { deliveryTime } = resData?.info?.sla || {};

return  (
  <div className="w-52 h-96 m-4 p-4 bg-slate-100 hover:cursor-pointer">
 <Link to={"/restaurent/"+id}>
    <img
      className="res-logo w-full h-52"
      alt="res-logo"
      src={`${CDN_URL}/${cloudinaryImageId}`}
    />
    <h3 className="mt-1.5">{name}</h3>
    <h4 className="break-words">{`${cuisines?.join(",")}`}</h4>
    <h4> {areaName}</h4>
    <h4>{`Rating ${avgRating}`}</h4>
    <h4>{`${deliveryTime} Minutes`}</h4>
    <h4>User: {loggedInUser}</h4>
    </Link>
  </div>
) 
};


export const OfferCard = (RestaurantCard) => {

    return (props) => {
      //console.log("propsssdata");
      //console.log(props.resData.info.aggregatedDiscountInfoV3);
      
      const { header,subHeader} = props?.resData?.info?.aggregatedDiscountInfoV3;
        return (
            <div className="relative w-fit">
              <label className="absolute -top-0 ml-[86px] -translate-x-1/2 bg-white opacity-80 px-3 py-1 text-xl font-extrabold text-center shadow rounded">{header} {subHeader}</label>
              <RestaurantCard  {...props} />
            </div>        
        );

    };
  
};
export default RestaurantCard;