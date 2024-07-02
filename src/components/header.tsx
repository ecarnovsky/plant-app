import { useState } from 'react'

function Header(){
    return(
        <>
            <header>
                <nav>
                    <div>Plants App</div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mynotes">My Notes</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <a href="/login">Login</a>
                    <button onClick={logout}>Logout</button>
                </nav>
            </header>
        </>
    )
}
export default Header


function logout(){
    fetch("/.netlify/functions/logout")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}