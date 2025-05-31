import React from "react";
class UserClass extends React.Component {
      constructor(props)
      {
        super(props);
        //console.log(props);
        this.state= {
            // gretting: `${this.props.name}`
            userInfo:{
                name:"Dummy Data",
                location:"Default location"
            }
           
        }
         console.log(this.props.name+"child component constructor");
    }

    async componentDidMount()
    {
        console.log(this.props.name+"child component DidMount Called");
                const data = await fetch("https://api.github.com/users/uday1251");
        const json = await data.json();
      
        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate()
    {
         //console.log("component Did Update");
    }

    componentWillUnmount()
    {
        //console.log("component will called");
    }
  render() {
        // console.log(this.state.userInfo);
         
       console.log(this.state.userInfo.name+"child component render");
      const {name,location,avatar_url} = this.state.userInfo;
      //debugger;
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
            <img src={avatar_url} className="w-24 h-24 rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Name : {name}</h2>
            <h3 className="text-lg font-medium mb-1">Location: {location}</h3>
            <h4 className="text-base text-gray-600">Contact: 7013970378</h4>
        </div>
      </div>
     
    );
  }
}

export default UserClass;
