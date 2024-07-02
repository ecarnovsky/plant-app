import { useState } from 'react'
import Layout from '../components/layout'

function Signup(){
    // const [count, setCount] = useState(0)
    return(
        <Layout>
            <h1>Signup</h1>
            <form action="/signup" method="POST">
                <input type="text" name="userName" placeholder="User Name"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="password" name="confirmPassword" placeholder="Confirm Password"></input>
                <input type="submit" value="Register"></input>
            </form>
        </Layout>
    )
}

export default Signup