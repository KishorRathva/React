
//rce and TAB
import React, { Component } from 'react'

class Counter extends Component {
    
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0 
        }
    }
    increment(){
        //UI will not rendered when state change (thats why we should not modified state directly)
        // this.state.count = this.state.count + 1



       
        // this.setState({
        //     count:this.state.count + 1
        // },() => {
        //     console.log('Callback value',this.state.count)
        // })
        // //this code is acync 
        // console.log(this.state.count)

        //whenever we have to  change a state based on previous state we ned to pass function as argument to setState 


        this.setState((prevState,props) =>( {
            count:prevState.count+1
        }))
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() =>this.incrementFive()}>Increment</button>          
            </div>
        )
    }
}

export default Counter
