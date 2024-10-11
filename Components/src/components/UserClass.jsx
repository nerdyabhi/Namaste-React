import React from "react";
class UserClass extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            count:0,
        }
    }

    render(){
        const {name} = this.props;
        let {count} = this.state;

        return(
            <>
                <h1>{name}</h1>
                <button className="btn " onClick={()=>{count = count +1; 
                    console.log(count)
                    }}>{count}</button>
            </>
        )
    }
}

export default UserClass;