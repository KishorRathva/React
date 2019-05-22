import React from 'react'


function Person({person}) {
    return (
        <div>
            <h2> My name id {person.name},I am {person.age} years old.I know {person.skill}</h2>
        </div>
    )
}

export default Person
