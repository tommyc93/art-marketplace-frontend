///////////////---------Imports---------///////////////
import React, {useState} from 'react'

const CreateArtist = (props) => {
    ///////////////---------Hooks/States---------///////////////
    let emptyArtist = { name: '', bio: '' }
    let [artist, setArtist] = useState(emptyArtist)

    ///////////////---------Function---------///////////////
    const handleChange = (event) => {
        setArtist({...artist, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreateArtist(artist)
        props.setCurrentView('showArt')
    }

    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3 w-50 mx-auto'>
        <br/><br/><br/><br/>
            <h3>Add New Artist</h3>
            <form onSubmit={handleSubmit}>
            <br/>
                <label htmlFor="name" class="form-label">Name: </label>
                <input type="text" name="name" onChange={handleChange} class="form-control" /><br/>
                <label htmlFor="bio">Bio: </label>
                <textarea type="text" name="bio" onChange={handleChange} class="form-control"></textarea><br/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>
        </div>
    )
}

export default CreateArtist
