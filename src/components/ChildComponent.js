import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* pass parameter : to pass parameter user arrow function */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>

        </div >
    )
}

export default ChildComponent
