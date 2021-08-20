///////////////---------Imports---------///////////////
import React, {useState} from 'react'

const NavBar = (props) => {
  ///////////////---------Hooks/States---------///////////////
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">

    <a class="btn btn-nav dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Art
    </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a class="dropdown-item" onClick={()=> {props.setCurrentView('create')}}>Add Art</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" onClick={()=> {props.setCurrentView('editArt')}}>Edit Art</a>
        </div>
      <button class="btn btn-nav mx-auto" onClick={()=> {props.setCurrentView('showArt')}}>Gallery</button>

    </nav>
  )
}

export default NavBar
