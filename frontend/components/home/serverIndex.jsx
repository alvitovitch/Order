import React from "react";


//presentational component
class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }


    render() {

        return(
            <div id='serverIndex'>
                <button className="serverButton" id='homeButton' onClick={() => this.props.history.push('/')}></button>
                This is a server Index
            </div>
        )
    }

}


export default ServerIndex