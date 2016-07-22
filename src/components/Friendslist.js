import React from "react";

import friends from "../../Friends";

import Friend from "./Friend";

class Friendslist extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending"
        };
    }
    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }
    render(){
        const friendslist = friends.map( friend => (
        <Friend currentLocation={friend.current_location || {} } friendCount={ friend.friend_count } key={ friend.$$hashkey } name={ friend.name } pictureUrl={ friend.pic_square } status={ friend.status ? friend.status.message : ""} />
        ))
        
        
        return (
        <div>
          <form className="form-inline searchForm" role="form">
             
              <div className="form-group">
                 
                  <input className="form-control" onChange={ this.handleChange.bind(this, "searchText") } placeholder="Search for Friends" value={ this.state.searchText }/>
                  
                  <select className="input-medium" onChange={ this.handleChange.bind(this, "orderBy") } value={ this.state.orderBy }>
                      <option value="name"></option>
                      <option value="friend_count">#friends</option>
                  </select>    
                  
                  <select onChange={ this.handleChange.bind(this, "order") } className="input-medium" value={ this.state.order }>
                  
                  <option value="descending">Descending</option>
                  <option value="ascending">Ascending</option>
                  </select>
                  
                  
              </div>
          </form> 
          <ul>
              { friendslist}
          </ul> 
        </div>
        )
    }
}

export default Friendslist;