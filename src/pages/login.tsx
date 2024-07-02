import { useState } from 'react'
import Layout from '../components/layout'

function Login(){
    // const [count, setCount] = useState(0)
    return(
        <Layout>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <input type="email" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="submit" value="Log in"></input>
            </form>
        </Layout>
    )
}

export default Login