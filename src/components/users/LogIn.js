import React, {useState} from 'react'

const LogIn = (props) => {

    let [logInUsername, setLogInUsername] = useState('')
    let [logInPassword, setLogInPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    const validateLogin = (e) => {
        e.preventDefault()
        setErrorMessage(null)
        if (props.users.some(user => user.username.includes(logInUsername))){
          if (props.users.some(user => user.username.includes(logInUsername) && user.password.includes(logInPassword))){
              props.users.filter(user => user.username === logInUsername && user.password === logInPassword).map(user => (
                  props.setCurrentUser(user),
                  props.setCurrentView('showArt')
              ))
          } else {
            setErrorMessage('Incorrect password')
            console.log('something')
          }
        } else {
          setErrorMessage('No user found with that username')
          console.log('else')
        }
    }

    const handleChangeUsername = (e) => {
        setLogInUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setLogInPassword(e.target.value)
    }

    return (
        <>
        <form onSubmit={(e)=>validateLogin(e)}>
        <br/><br/>
          <div class='card w-50 mx-auto'>
          <div class='card-header'>
            <h1>Log In</h1>
          </div>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' onChange={(e)=>handleChangeUsername(e)} />
            <p>{errorMessage == 'No user found with that username' && errorMessage}</p>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' onChange={(e)=>handleChangePassword(e)} />
            <p>{errorMessage == 'Incorrect password' && errorMessage}</p>
            <br/>
          <div class='card-footer'>
            <input type='submit' value='Log In' class="btn btn-outline-primary" />
          </div>
          </div>
        </form>
        </>
    )
}

export default LogIn
