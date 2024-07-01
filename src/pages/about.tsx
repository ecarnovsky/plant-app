import { useState } from 'react'
import Layout from '../components/layout'

function About(){
    const [count, setCount] = useState(0)
    return(
        <Layout>
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur laborum suscipit distinctio nam temporibus autem et excepturi blanditiis ipsam, cumque, quod ex! Obcaecati nemo iste cupiditate facere, dignissimos iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ab unde amet accusantium illum ad? Eos dicta ipsa fuga excepturi consectetur? Iusto veritatis fugiat id delectus, tenetur pariatur cumque labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus nemo eius unde. Officia maiores ut harum aspernatur mollitia dolorem praesentium quia, quasi a quibusdam impedit totam, quaerat molestiae repellendus.</p>
        </Layout>
    )
}

export default About