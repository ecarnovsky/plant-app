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
                </nav>
            </header>
        </>
    )
}
export default Header