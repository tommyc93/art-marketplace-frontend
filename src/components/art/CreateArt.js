///////////////---------Imports---------///////////////
import React, {useState} from 'react'

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
        <div class='mb-3 w-50 mx-auto'>
        <br/><br/><br/><br/>
            <h3>Add New Art</h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" class="form-label">Title: </label>
                <input type="text" name="title" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="author" class="form-label">Author: </label>
                <input type="text" name="author" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="rating" class="form-label">Rating: </label>
                <input type="number" name="rating" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="image" class="form-label">Image: </label>
                <input type="text" name="image" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="price" class="form-label">Price: </label>
                <input type="number" name="price" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="description" class="form-label">Description: </label>
                <textarea name="description" onChange={handleChange} class="form-control"></textarea>
                <br/>
                <label htmlFor="created_date" class="form-label">Created Date: </label>
                <input type="date" name="created_date" onChange={handleChange} class="form-control" /><br/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>
        </div>
    )
}

export default CreateArt
