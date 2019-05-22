import React from 'react'
const Hello = () => {
    //Jsx version 
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Kishor</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'Hello',className:'dummyClass'},React.createElement('h1',null,'Kishorrrr'))
}

export default Hello 