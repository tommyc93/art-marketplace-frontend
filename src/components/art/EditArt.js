///////////////---------Imports---------///////////////
import React, {useState} from 'react'
// import {Modal} from 'react-responsive-modal'
// import 'react-responsive-modal/styles.css'

const EditArt = (props) => {
    ///////////////---------Hooks/States---------///////////////
    let [piece, setPiece] = useState(...props.piece)

    ///////////////---------Function---------///////////////
    const handleChange = (event) => {
        setPiece({...piece, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(piece)
    }

    ///////////////---------Return---------///////////////
    return (
        <div>
            <details>
            <summary>Edit Art</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={handleChange} value={piece.title}/><br/>
                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" onChange={handleChange} value={piece.author}/><br/>
                    <label htmlFor="rating">Rating: </label>
                    <input type="number" name="rating" onChange={handleChange} value={piece.rating}/><br/>
                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" onChange={handleChange} value={piece.image}/><br/>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={handleChange} value={piece.price}/><br/>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" onChange={handleChange} value={piece.description}/><br/>
                    <label htmlFor="created_date">Created Date: </label>
                    <input type="text" name="created_date" onChange={handleChange} value={piece.created_date}/><br/>
                    <input type='submit' />
                </form>
            </details>
        </div>
    )
}

export default EditArt
