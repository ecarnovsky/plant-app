
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from '@supabase/supabase-js'

const supabase = createClient('https://qmhreacazeduczuzdjby.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaHJlYWNhemVkdWN6dXpkamJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4OTE0NjksImV4cCI6MjAzNTQ2NzQ2OX0.Q1XbriZC365Ip2smEYhBhivyvfV4hIuNq8XT4JVWQlw')


export function useIsLoggedIn() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return false
  }
  else {
    return true
  }
}

export default function AuthForm(){

  return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)

}

export function logOut(){

}
