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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange} /><br/>
                <label htmlFor="bio">Bio: </label>
                <input type="text" name="bio" onChange={handleChange} /><br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateArtist
