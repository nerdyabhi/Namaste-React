import React from "react";
class UserClass extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name:"John Doe",
                avatar:"https://loremflickr.com/640/480",
                city:"Kingsont",
                country:"Unknown",
            }
        }
    }

    async componentDidMount(){
        console.log("Component Mounted");
        const res = await fetch("https://67011558b52042b542d6b88f.mockapi.io/MockData");
        const data = await res.json();
        
        this.setState({
            userInfo:data[0]
        })
      
    }

    componentDidUpdate(){
        console.log("Component updated sir..");
        
    }

    render(){
 
        let { name , avatar , city , country} = this.state.userInfo; 

        return(
            <>
                <h1>{name}</h1>
                <img src={avatar} alt="Image will render shortly.." />
                <h1 className="btn btn-warning">{city}</h1>
                <h1 className="btn btn-warning">{country}</h1>
            </>
        )
    }
}

export default UserClass;