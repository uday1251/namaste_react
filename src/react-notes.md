import React,{lazy,suspense,useEffect,useState,useContext} from "react";
import ReactDOM, {createRoot} from "react-dom/client";


npm init :

It creates a package.json File

Now  to install the parcel we will do like below cmd

npm install -D parcel



package.json:  package.json file is a configuration from NPM. Whatever packages our project needs we need to install those packages using

npm install <packageName>


- once the packages installation is complete . thire verstion and configuration related information stored as dependencies inside the package.json file


- package.lock.json : package.lock.josn file locks the exact version of the packages being used in the project.



npx parcel index.html

npx means : excute using npm

index.html is the entry point

npm install -D react

npm i react-dom





for rootes install bellow

npm i -D react-router-dom

import {createBroweserRoute,Outlet,RouterProvider} from "react-router-dom"

lazy loading using below 


const Grocery = lazy(()=>import("./compoent/Grocery))

const appRouter = createBrowserRoute([
    {
        path:'/',
        element:<Applayout/>,
        children:[
            {
                path:'/', 
               element: <Body />
            },
            {
                path:"/grocery',
                elemernt : <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementByID("root"));

root.render(<RouterProvider router={appRouter}>)