import React from "react";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    lookup(){
        
    }

    render(){
        return(
            <form className="search-form">
                <input type="text" className="search-input" placeholder="&#128269; Search Users" onChange={this.lookup({
                    
                })}/>
            </form>
        );
    }
}

export default ChatRoom;