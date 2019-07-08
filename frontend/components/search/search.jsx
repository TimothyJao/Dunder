import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchUsers: props.searchUsers}
        this.lookup = this.lookup.bind(this)
    }

    lookup(){
        return e => this.props.findUsers(e.currentTarget.value);
    }

    render(){
        return(
            <>
                <form className="search-form">
                    <input type="text" className="search-input" placeholder="&#128269; Search Users" onChange={this.lookup()}/>
                </form>
                {this.state.searchUser}
            </>
        );
    }
}

export default Search