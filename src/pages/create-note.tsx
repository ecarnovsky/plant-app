import { useState } from 'react'
import Layout from '../components/layout'

function CreateNote(){
    const [count, setCount] = useState(0)
    return(
        <Layout>
            <h1>Create Note Page</h1>
        </Layout>
    )
}
export default CreateNote