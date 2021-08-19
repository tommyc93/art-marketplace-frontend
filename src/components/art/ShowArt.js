///////////////---------Imports---------///////////////
import React from 'react'

const ShowArt = (props) => {

    ///////////////---------Return---------///////////////
    return (
        <div>
            <h3>{props.prop.title}</h3>
            <img src={props.prop.image} />
            <h4><strong>Author: </strong>{props.prop.author}</h5>
            <h5><strong>Description: </strong>{props.prop.description}</h5>
            <ul>
                <li><strong>Created Date: </strong>{props.prop.created_date}</li>
                <li><strong>Price: </strong>{props.prop.description}</li>
                <li><strong>Rating: </strong>{props.prop.rating}</li>
            </ul>
        </div>
    )
}

export default ShowArt
