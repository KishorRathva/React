import React, { Component } from 'react'

export class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

       return  this.state.isLoggedIn && <div>welcome Kishor</div>
        // return this.state.isLoggedIn ? (
        // <div>Welcome Kishor</div>):(<div>welcome poo</div>)
        //##
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Kishor</div>
        // }else {
        //     message = <div>Welcome poo</div>
        // }

        //##

        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Kishor</div>
        // }else{
        //     return <div>Welcome</div>
        // }
    }
}

export default UserGreeting
