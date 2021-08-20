// ///////////////---------Imports---------///////////////
// import React, {useState} from 'react'
//
// const CreateArtist = (props) => {
//     ///////////////---------Hooks/States---------///////////////
//     let emptyArtist = { name: '', bio: '', art: '' }
//     let [artist, setartist] = useState(emptyArtist)
//
//     ///////////////---------Function---------///////////////
//     const handleChange = (event) => {
//         setPiece({...piece, [event.target.name]: event.target.value})
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         props.handleCreate(piece)
//     }
//
//     ///////////////---------Return---------///////////////
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name: </label>
//                 <input type="text" name="name" onChange={handleChange} /><br/>
//                 <label htmlFor="bio">Bio: </label>
//                 <input type="text" name="bio" onChange={handleChange} /><br/>
//                 <input type='submit' />
//             </form>
//         </div>
//     )
// }
//
// export default CreateArtist
