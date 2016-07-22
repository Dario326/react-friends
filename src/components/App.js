import React from "react";
import Friendslist from "./Friendslist"

class App extends React.Component {
    render() {
        return (
        <div>
            <h1>The <strong>facebook</strong >Friend Machine</h1>
            <div className="friends">
                <Friendslist></Friendslist>
            </div>
        </div>
        
        
        )
    }
}

export default App;