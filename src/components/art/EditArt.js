///////////////---------Imports---------///////////////
import React, {useState} from 'react'

const EditArt = (props) => {
    ///////////////---------Hooks/States---------///////////////
    let [piece, setPiece] = useState({...props.piece})

    ///////////////---------Function---------///////////////
    const handleChange = (event) => {
        setPiece({...piece, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(piece)
        props.setCurrentView('showArt')
    }

    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3'>
            <details>
            <summary>Edit Art</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" class="form-label">Title: </label>
                    <input type="text" name="title" onChange={handleChange} value={piece.title} class="form-control"/><br/>
                    <div class='form-group'>
                    <label htmlFor="author" class="form-label">Artist: </label>

                      <select class="form-select" name="author" onChange={handleChange} value={piece.author.id}>
                          <option>-</option>
                        {
                          props.artists.map((artist) => {
                              return (<option value={artist.id}>{artist.name}</option>)
                          })
                        }
                      </select>
                    </div>
                    <br/>
                    <label htmlFor="rating" class="form-label">Rating: </label>
                    <input type="number" name="rating" onChange={handleChange} value={piece.rating} class="form-control"/><br/>
                    <label htmlFor="image" class="form-label">Image: </label>
                    <input type="text" name="image" onChange={handleChange} value={piece.image} class="form-control"/><br/>
                    <label htmlFor="price" class="form-label">Price: </label>
                    <input type="number" name="price" onChange={handleChange} value={piece.price} class="form-control"/><br/>
                    <label htmlFor="description" class="form-label">Description: </label>
                    <textarea name="description" onChange={handleChange} class="form-control" value={piece.description}></textarea><br/>
                    <label htmlFor="created_date" class="form-label">Created Date: </label>
                    <input type="date" name="created_date" onChange={handleChange} value={piece.created_date} class="form-control"/><br/>
                    <input type='submit' class='btn btn-outline-dark' />
                </form>

            </details>
            <button onClick={props.handleDelete} value={piece.id} class='btn btn-outline-danger'>Delete</button>
        </div>
    )
}

export default EditArt
