import React from "react";
import { ServerShowContainer } from './serverShowContainer'

class SelectedChannelPage extends React.Component {

    constructor(props) {
        super(props)
        debugger
    }

    render() {
        if (this.props.channel !== undefined) {
        return(
            <div>
                {this.props.channel.name}
            </div>
        )
        }
        else {
            return(
                <div>
                    loading
                </div>
            )
        }
    }
}

export default SelectedChannelPage