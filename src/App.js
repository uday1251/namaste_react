import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import Shimmer from "./components/Shimmer";


const Grocery = lazy(()=>import('./components/Grocery'));

const About = lazy(()=>import('./components/About'))



const AppLayout = () =>{

  const [userName,setUserName] = useState();

  useEffect(()=>{

  //make  A api CALL SEND USER nAME AND PASSWORD
    const data = {
      name: "Uday Bikumandla"
    }

    setUserName(data.name);
  },[])
  return (

      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
             
                <Header />
              
                <Outlet />
            </div>
            </UserContext.Provider>

    
  )

}


const appRouter = createBrowserRouter([
   {
     path : "/",
    element: <AppLayout />,
    children :[
     {
       path :"/",
       element: <Body />
     },
     {
       path :"/about",
       element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
     },
     {
      path:"/contact",
      element: <Contact />
     },
     {
      path:"/restaurent/:resId",
      element: <RestaurentMenu />
     },
     {
      path:"grocery",
      element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
     }
    ],
    errorElement: <Error />
   }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);