import React, {useState} from 'react'

const EditArtist = (props) => {

  let [person, setPerson] = useState({...props.person})

  const handleChange = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdateArtist(person)
  }

  return (
    <div class='mb-3'>
        <details>
        <summary>Edit Artist</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" class="form-label">Name: </label>

                <input type="text" name="name" onChange={handleChange} value={person.name} class="form-control"/><br/>
                <label htmlFor="bio" class="form-label">Bio: </label>
                <textarea type="text" name="bio" onChange={handleChange} value={person.bio} class="form-control"></textarea><br/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>

        </details>
        <button onClick={props.handleDeleteArtist} value={person.id} class='btn btn-outline-danger'>Delete</button>
    </div>
  )
  }

  export default EditArtist
