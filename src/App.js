///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//====Art====//
import CreateArt from './components/art/CreateArt'
import EditArt from './components/art/EditArt'
import ShowArt from './components/art/ShowArt'
import Banner from './components/utils/Banner'
import NavBar from './components/utils/NavBar'

//====Artist====//
// import CreateArtist from './components/artist/CreateArtist'
// import EditArtist from './components/artist/EditArtist'

//====Users====//
// import CreateUser from './components/users/CreateUser'

const App = () => {
    ///////////////---------Hooks/States---------///////////////
    let [artCollection, setArtCollection] = useState([])
    let [currentUser, setCurrentUser] = useState('')
    let [currentView, setCurrentView] = useState('showArt')

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
        <>
            <Banner />
            <NavBar setCurrentView={setCurrentView} />

            <div class='mx-auto text-center'>

            {currentView == 'create' &&
                <CreateArt
                  handleCreate={handleCreate}
                />
            }
            {currentView == 'showArt' &&
                <>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto text-center'>
                {artCollection.map((pieces) => {
                    return <ShowArt prop={pieces} />
                })}
                </div>
                </>
            }
            {currentView == 'editArt' &&
                <>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto'>
                {artCollection.map((pieces) => {
                  return (
                      <div class='card flex-even'>
                          <ShowArt
                              prop={pieces}
                          />
                          <EditArt
                              handleUpdate={handleUpdate}
                              piece={pieces}
                              handleDelete
                          />
                      </div>
                  )
                })}
                </div>
                </>
            }

            </div>
        </>
    )
}

export default App
