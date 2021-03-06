///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
//====Art====//
import CreateArt from './components/art/CreateArt'
import EditArt from './components/art/EditArt'
import ShowArt from './components/art/ShowArt'
import Banner from './components/utils/Banner'
import NavBar from './components/utils/NavBar'
import CreateUser from './components/users/CreateUser'
import LogIn from './components/users/LogIn'
import CreateArtist from './components/artist/CreateArtist'
import EditArtist from './components/artist/EditArtist'
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
    let [filterBy, setFilterBy] = useState('All')
    let [cart, setCart] = useState([])
    let [sum, setSum] = useState(0)
    let [updateCart, setUpdateCart] = useState(cart)
    let [rerender, setRerender] = useState(false)

    ///////////////---------Functions---------///////////////

    //////////////---------Carousel Settings-----/////////////

    const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  className: "slides",
  autoplay: true,
  speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
}
    //====Create====//
    const handleCreate = (addArt) => {
        axios
            .post('https://murmuring-coast-02165.herokuapp.com/api/art', addArt)
            .then((response) => {
                console.log(response)
                getArt()
            })
    }

    const handleCreateArtist = (addArtist) => {
      axios
        .post('https://murmuring-coast-02165.herokuapp.com/api/artist', addArtist)
        .then((response) => {
          getArtists()
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
    const handleUpdateArtist = (editArtist) => {
        axios
            .put('https://murmuring-coast-02165.herokuapp.com/api/artist/' + editArtist.id, editArtist)
            .then((response) => {
                getArtists()
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
    const handleDeleteArtist = (event)=> {
      axios
          .delete('https://murmuring-coast-02165.herokuapp.com/api/artist/' + event.target.value)
          .then((response) => {
              getArtists()
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

    //=====Cart=====//
    const addCart = (item) => {
        if (!cart.includes(item)){
            setCart([...cart, item])
            setRerender(!rerender)
        } else {
          alert('You already have that item in your cart!')
        }
    }

    const removeCart = (item) => {
        let cartUpdated = cart
        cartUpdated.splice(item, 1)
        setCart(cartUpdated)
        cartSum()
        setRerender(!rerender)
    }

    const cartSum = () => {
         let sumTotal = 0
         for (let i = 0; i < updateCart.length; i++){
             sumTotal += updateCart[i].price
         }
         setSum(sumTotal)
         setRerender(!rerender)
    }


    //====Filter====//
    const updateFilter = (event) => {
     setFilterBy(event.target.value)
    }

    //====useEffect====//
    useEffect(() => {
        getArt()
        getUsers()
        getArtists()
    }, [])

    useEffect(() => {
         setUpdateCart(cart)
         cartSum()
    }, [cart])

    useEffect(() => {
         cartSum()
    }, [updateCart])

    ///////////////---------Return---------///////////////
    return(
        <>
            <Banner />
            <NavBar
                setCurrentView={setCurrentView}
                getUsers={getUsers}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                artists={artists}
                filterBy={filterBy}
                updateFilter={updateFilter}
                cart={cart}
                setCart={setCart}
                sum={sum}
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
            {currentView == 'createArtist' &&
                <CreateArtist
                  handleCreateArtist={handleCreateArtist}
                  setCurrentView={setCurrentView}
                />
            }
            {currentView == 'showArt' &&
                <>
                <br/><br/>

                <div class='mx-auto w-50 h-25'>

                <Slider {...settings}>
                {artCollection.map((pieces) => {
                  return(
                    <div>
                    <img class="s-image" src ={pieces.image}/>
                    </div>
                  )
                })}
                </Slider>
                </div>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto text-center'>
                {filterBy == 'All' &&
                <>
                {artCollection.map((pieces) => {
                    return <ShowArt
                                prop={pieces}
                                addCart={addCart}
                                cart={cart}
                                currentView={currentView}
                                currentUser={currentUser}
                            />
                })}
                </>
                }
                {artCollection.filter(artWork => artWork.author.name == filterBy).map((pieces) => {
                    return <ShowArt
                                prop={pieces}
                                addCart={addCart}
                                cart={cart}
                                currentView={currentView}
                                currentUser={currentUser}
                            />
                })}
                </div>
                </>
            }

            {currentView == 'editArt' &&
                <>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto'>
                {filterBy == "All" &&
                <>
                {artCollection.map((pieces) => {
                  return (
                      <div class='card flex-even' >
                          <ShowArt
                              prop={pieces}
                          />
                          <EditArt
                              handleUpdate={handleUpdate}
                              piece={pieces}
                              handleDelete={handleDelete}
                              artists={artists}
                              setCurrentView={setCurrentView}
                          />
                      </div>
                  )
                })}
                </>
                }
                {artCollection.filter(artWork => artWork.author.name == filterBy).map((pieces) => {
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
                                setCurrentView={setCurrentView}
                            />
                        </div>
                    )
                })}

                </div>
                </>
            }
            {currentView == 'editArtist' &&
                <>
                <br/><br/>
                <div class='d-flex flex-wrap mx-auto'>
                {artists.map((person) => {
                  return (
                      <div class='card flex-even'>

                          <EditArtist
                              handleUpdateArtist={handleUpdateArtist}
                              person={person}
                              handleDeleteArtist={handleDeleteArtist}
                              artists={artists}
                          />
                      </div>
                  )
                })}

                </div>
                </>
            }
            {currentView == 'cart' &&
                <Cart
                    removeCart={removeCart}
                    handleDelete={handleDelete}
                    cart={cart}
                    setCart={setCart}
                    setSum={setSum}
                    setUpdateCart={setUpdateCart}
                    getArt={getArt}
                    setCurrentView={setCurrentView}
                />
            }

            </div>
        </>
    )
}

export default App
