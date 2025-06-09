import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

//   const store = useSelector((store)=>store);
// console.log(store);
//   const cartItems = store.cart.items;

    const cartItems = useSelector((store) => {
      return store.cart.items;
    });

    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    };
    return (
         <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
              <h1 className="font-extrabold text-2xl flex justify-center">Shop Cart</h1>
              <button className="bg-blue-300 p-2.5" onClick={handleClearCart}>clearCart</button>
            {cartItems==0 && <h1 className=" text-center font-semibold">Please add cart items </h1>}
        <ItemList items={cartItems} />

         </div>
    )
}

export default Cart