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

    clickHandler(){
        debugger
    }

    componentDidUpdate(){
        if(this.state.searchUsers != this.props.searchUsers){
            this.setState({searchUsers: this.props.searchUsers})
        }
    }

    listUsers(){
        if(this.state.searchUsers.length > 0){
            return(
                <ul className="search-list">
                    {this.state.searchUsers.map( user => {
                        return(
                            <li key = {user.id} className = "search-user">
                                <div className="user-div" onclick={this.clickHandler(user.id)}>
                                    {user.username}
                                </div>
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