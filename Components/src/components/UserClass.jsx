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
                <button className="btn px-10 border-white" onClick={()=>
                {
                    this.setState({
                        count:count+1,
                    })    
                }}>{count}</button>
            </>
        )
    }
}

export default UserClass;