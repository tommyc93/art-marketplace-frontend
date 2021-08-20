///////////////---------Imports---------///////////////
import React from 'react'

const ShowArt = (props) => {

    ///////////////---------Return---------///////////////
    return (
        <div>
        <br/><br/><br/><br/>
            <h3>{props.prop.title}</h3>
            <img src={props.prop.image} />
            <h4><strong>Author: </strong>{props.prop.author}</h4>
            <h5><strong>Description: </strong>{props.prop.description}</h5>
            <ul>
                <li class='list-unstyled'><strong>Created Date: </strong>{props.prop.created_date}</li>
                <li class='list-unstyled'><strong>Price: </strong>{props.prop.description}</li>
                <li class='list-unstyled'><strong>Rating: </strong>{props.prop.rating}</li>
            </ul>
        </div>
    )
}

export default ShowArt
