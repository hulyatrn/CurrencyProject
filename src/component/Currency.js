import React, {Component} from "react";

class Currency extends Component {


    render() {
        console.log(this.props.currency)

        return (
            <div className="currency">  
                <h1 className="name">{this.props.currency.name}</h1>
                <h2 className="buying">{this.props.currency.buying}</h2>
                <h2 className="selling">{this.props.currency.selling}</h2>
            </div>
        )
    }
}
export default Currency