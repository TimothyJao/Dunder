import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        searchUsers: [],
                        currentUser: props.currentUser         
                    }
        this.lookup = this.lookup.bind(this)
    }

    lookup(){
        return e => this.props.findUsers(e.currentTarget.value);
    }

    componentDidUpdate(){
        if(this.state.searchUsers != this.props.searchUsers){
            this.setState({searchUsers: this.props.searchUsers})
        }
    }

    listUsers(){
        if(this.state.searchUsers){
            return(
                <ul>
                    {this.state.searchUsers.forEach( user => {
                        return(
                            <li>
                                {user.username}
                            </li>
                        )
                    })}
    
                </ul>
                
            )
        }
    }

    render(){
        return(
            <>
                <form className="search-form">
                    <input type="text" className="search-input" placeholder="&#128269; Search Users" onChange={this.lookup()}/>
                </form>
                {this.listUsers()}
            </>
        );
    }
}

export default Search