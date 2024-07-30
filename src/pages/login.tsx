import Layout from '../components/layout'
import AuthForm from '../supabase-auth'

function Login(){
    return(
        <Layout>
            <h1>Login</h1>
            <AuthForm/>
        </Layout>
    )
}

export default Login