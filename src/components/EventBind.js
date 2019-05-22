import React, { Component } from 'react'

export class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        //binding in the constructor
        this.changeMessage = this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     //console.log(this)
    //     this.setState({
    //         message:"Goodbye!"
    //     })
    // }
    changeMessage = () => {
        this.setState({
            message:"GoodBye!!"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Every update to thee state will cox rereder of the page */}
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
                <button onClick={() => this.changeMessage()}>Click</button>
                <button onClick={ this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default EventBind
