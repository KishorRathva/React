import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        this.greeetParent = this.greeetParent.bind(this)
    }
    greeetParent(childName){
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greeetParent}/>
            </div>
        )
    }
}

export default ParentComponent
