///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'

const NavBar = (props) => {
  ///////////////---------Functions---------///////////////

  const logOut = () => {
        props.setCurrentUser(undefined)
        props.setCurrentView('showArt')
   }

  ///////////////---------Return---------///////////////
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <ul class="navbar-nav nav-fill w-100">
            <li class="nav-item dropdown">
                <button class="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Art
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" onClick={()=> {props.setCurrentView('create')}}>Add Art</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" onClick={()=> {props.setCurrentView('editArt')}}>Edit Art</a></li>
                </ul>
                <button class="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Artist
                </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" onClick={()=> {props.setCurrentView('createArtist')}}>Add Artist</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" onClick={()=> {props.setCurrentView('editArtist')}}>Edit Artist</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <button class="btn btn-nav mx-auto" onClick={()=> {props.setCurrentView('showArt')}}>Gallery</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-nav mx-auto" onClick={()=> {props.setCurrentView('cart')}}><span className="material-icons">shopping_cart</span></button>
                <br/>
                {props.cart.length > 0 &&
                  <p>Total $ {props.sum}</p>}
            </li>
            <li class="nav-item">
            <label htmlFor='select'>Filter By Artist:</label><br/>
            <select class='form-select w-50 mx-auto' value={props.filterBy} onChange={props.updateFilter}>
                <option>All</option>
              {
                props.artists.map((artist) => {
                    return (<option value={artist.name}>{artist.name}</option>)
                })
              }
            </select>
            </li>
            <li class="nav-item">
                {props.currentUser &&
                    <p>Welcome {props.currentUser.username}</p>
                }
            </li>
            <li class="nav-item">
                 {props.currentUser ?
                    <>
                        <button className="btn btn-nav" onClick={()=> logOut()}>Log Out</button>
                    </>:
                    <>
                        <button className="btn btn-nav" onClick={()=>props.setCurrentView('logIn')}>Log In</button>
                        <button className="btn btn-nav" onClick={()=>props.setCurrentView('signUp')}>Sign Up</button>
                    </>
                 }
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
