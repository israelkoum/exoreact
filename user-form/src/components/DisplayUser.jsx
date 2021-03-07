import React from 'react'



const DisplayUser = ({ elt }) =>{
    // console.log(props)

    return(
        <div>
            <p>Name:{elt && elt.name}</p>
            <p>Username: {elt && elt.username}</p>
            <p>Email:{elt && elt.email}</p>
        </div>
    )
}



export default DisplayUser