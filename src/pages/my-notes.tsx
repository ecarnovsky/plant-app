import { useState } from 'react'
import Layout from '../components/layout'

function MyNotes(){
    // const [count, setCount] = useState(0)
    return(
        <Layout>
            <h1>My Notes</h1>
            <a href="/createnote">Create New Note</a>
            <ul>
                <li>note 1</li>
                <li>note 2</li>
                <li>note 3</li>
            </ul>
        </Layout>
    )
}

export default MyNotes