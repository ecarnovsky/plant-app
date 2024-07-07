import Layout from '../components/layout'
import AuthForm from '../supabase-auth'
import { useIsLoggedIn } from '../supabase-auth';

 function Home(){
    return(
      <Layout>
        <section>
          <h1>What is Plant Tracker?</h1>
          <p>Plant Tracker is website that lets you save and manage images of plants you’ve collected seeds from. Plant Tracker makes it easy to record data, keep track of crosses, and maintain a photographic record of the lineage of your plants. Sign up today for free.</p>
        </section>
        { !useIsLoggedIn && (
          <section>
            <h2>Sign Up / Login</h2>
            <AuthForm/>
          </section>
        )}

      </Layout>
    )
}


export default Home