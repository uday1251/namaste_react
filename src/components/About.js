import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
      constructor(props){
         super(props);
         //console.log("Parrent constructor");
      }
    componentDidMount()
    {
        //console.log("Parrent component DidMount Called");

    }
   render(){
      //console.log("Parrent render");
     return (
      <div>
         <h1 className="text-2xl font-extrabold text-center my-3.5">About Page</h1>
         <div>
            
            <UserContext.Consumer>
                {({loggedInUser}) => <h1 className="flex items-center justify-center mb-2 font-bold">LoggedInUser:{loggedInUser}</h1>}
            </UserContext.Consumer>
         </div>
        {/* <User /> */}
        <UserClass   name="first" location="HayathNagar" />
         
      </div>
    )
   }
}

export default About