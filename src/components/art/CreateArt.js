///////////////---------Imports---------///////////////
import React, {useState} from 'react'
// import {Modal} from 'react-responsive-modal'
// import 'react-responsive-modal/styles.css'

const CreateArt = (props) => {
    ///////////////---------Hooks/States---------///////////////
    let emptyArt = { title: '', author: '', rating: '', image: '', price: '', description: '', created_date: '' }
    let [piece, setPiece] = useState(emptyArt)

    ///////////////---------Function---------///////////////
    const handleChange = (event) => {
        setPiece({...piece, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(piece)
    }

    ///////////////---------Return---------///////////////
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={handleChange} /><br/>
                <label htmlFor="author">Author: </label>
                <input type="text" name="author" onChange={handleChange} /><br/>
                <label htmlFor="rating">Rating: </label>
                <input type="number" name="rating" onChange={handleChange} /><br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" onChange={handleChange} /><br/>
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={handleChange} /><br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={handleChange} /><br/>
                <label htmlFor="created_date">Created Date: </label>
                <input type="date" name="created_date" onChange={handleChange} /><br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateArt
