import { useIsLoggedIn, logOut } from '../supabase-auth';
import AuthForm from '../supabase-auth';

function Header(){

    const isLoggedIn = useIsLoggedIn();

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
                    {isLoggedIn ? (
                        <button onClick={logOut}>Logout</button>
                    ):(
                        <>
                        <a href="/login">Login</a> 
                        <AuthForm/>
                        </>
                    )}
                </nav>
            </header>
        </>
    )
}
export default Header
