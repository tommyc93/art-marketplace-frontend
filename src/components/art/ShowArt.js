///////////////---------Imports---------///////////////
import React from 'react'

const ShowArt = (props) => {

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even'>
            <div class='card-header'>
                <h3>{props.prop.title}</h3>
            </div>
            <div class='card-body'>
                <img src={props.prop.image} />
            </div>
            <div class='card-footer'>
                <h5><strong>Author: </strong>{props.prop.author}</h5>
                <h5><strong>Description: </strong>{props.prop.description}</h5>
                <ul>
                      <li class='list-unstyled'><strong>Created Date: </strong>{props.prop.created_date}</li>
                      <li class='list-unstyled'><strong>Price: </strong>{props.prop.price}</li>
                      <li class='list-unstyled'><strong>Rating: </strong>{props.prop.rating}</li>
                </ul>
            </div>
        </div>
    )
}

export default ShowArt
