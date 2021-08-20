///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'
// import {Modal} from 'react-responsive-modal'
// import 'react-responsive-modal/styles.css'
import axios from 'axios'
import './App.css';
//====Art====//
import CreateArt from './components/art/CreateArt'
import EditArt from './components/art/EditArt'
import ShowArt from './components/art/ShowArt'

//====Artist====//
// import CreateArtist from './components/artist/CreateArtist'
// import EditArtist from './components/artist/EditArtist'

//====Users====//
// import CreateUser from './components/user/CreateUser'

const App = () => {
    ///////////////---------Hooks/States---------///////////////
    let [artCollection, setArtCollection] = useState([])

    ///////////////---------Functions---------///////////////
    //====Create====//
    const handleCreate = (addArt) => {
        axios
            .post('https://murmuring-coast-02165.herokuapp.com/api/art', addArt)
            .then((response) => {
                console.log(response)
                getArt()
            })
    }

    //====Update====//
    const handleUpdate = (editArt) => {
        axios
            .put('https://murmuring-coast-02165.herokuapp.com/api/art/' + editArt.id, editArt)
            .then((response) => {
                getArt()
            })
    }

    //====Delete====//
    const handleDelete = (event) => {
        axios
            .delete('https://murmuring-coast-02165.herokuapp.com/api/art/' + event.target.value)
            .then((response) => {
                getArt()
            })
    }

    //====Show====//
    const getArt = () => {
        axios
            .get('https://murmuring-coast-02165.herokuapp.com/api/art')
            .then(
                (response) => setArtCollection(response.data),
                (error) => console.error(error)
            )
            .catch((error) => console.error(error))
    }

    //====useEffect====//
    useEffect(() => {
        getArt()
    }, [])

    ///////////////---------Return---------///////////////
    return(
        <div>
            <h1>Hello World</h1>
            <CreateArt handleCreate={handleCreate} />
            {artCollection.map((pieces) => {
                return (
                    <div>
                        <ShowArt prop={pieces} />
                        <EditArt handleUpdate={handleUpdate} piece={pieces} />
                        <button onClick={handleDelete} value={pieces.id}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default App
