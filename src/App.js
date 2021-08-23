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
import CreateUser from './components/users/CreateUser'
import LogIn from './components/users/LogIn'
import Cart from './components/utils/Cart'

//====Artist====//
// import CreateArtist from './components/artist/CreateArtist'
// import EditArtist from './components/artist/EditArtist'

//====Users====//
// import CreateUser from './components/users/CreateUser'

const App = () => {
    ///////////////---------Hooks/States---------///////////////
    let [artCollection, setArtCollection] = useState([])
    let [currentUser, setCurrentUser] = useState(undefined)
    let [currentView, setCurrentView] = useState('showArt')
    let [users, setUsers] = useState([])
    let [artists, setArtists] =useState([])
    let [cart, setCart] = useState([])
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

    //====Add to Cart====//
    const addCart = (buyArt) => {
        setCart([...cart, buyArt])
    }

    const getUsers = () => {
        axios
            .get('https://murmuring-coast-02165.herokuapp.com/api/users')
            .then((response) => {
                setUsers(response.data)
            })
    }

    const getArtists = () => {
        axios
            .get('https://murmuring-coast-02165.herokuapp.com/api/artist')
            .then((response) => {
                setArtists(response.data)
            })
    }

    //====useEffect====//
    useEffect(() => {
        getArt()
        getUsers()
        getArtists()
    }, [])

    ///////////////---------Return---------///////////////
    return(
        <>
            <Banner />
            <NavBar
                setCurrentView={setCurrentView}
                getUsers={getUsers}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />

            <div class='mx-auto text-center'>

            {currentView == 'signUp' &&
                <CreateUser
                    setCurrentUser={setCurrentUser}
                    setCurrentView={setCurrentView}
                    getUsers={getUsers}
                />
            }
            {currentView == 'logIn' &&
                <LogIn
                    setCurrentUser={setCurrentUser}
                    setCurrentView={setCurrentView}
                    users={users}
                />
            }
            {currentView == 'create' &&
                <CreateArt
                  handleCreate={handleCreate}
                  artists={artists}
                  setCurrentView={setCurrentView}
                />
            }
            {currentView == 'showArt' &&
                <>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto text-center'>
                {artCollection.map((pieces) => {
                    return <ShowArt prop={pieces} addCart={addCart}/>
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
                              handleDelete={handleDelete}
                              artists={artists}
                          />
                      </div>
                  )
                })}
                </div>
                </>
            }
            {currentView == 'cart' &&
                <>
                    <Cart items={cart} />
                </>
            }

            </div>
        </>
    )
}

export default App
