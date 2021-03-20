import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { initFirebase } from './initFirebase'
import { removeTokenCookie, setTokenCookie } from './tokenCookies'
import { useRouter } from 'next/router'

initFirebase()

interface IAuthContext {
  user: firebase.User | null
  logout: () => void
  authenticated: boolean
}

export const AuthContext = React.createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<firebase.User | null>(null)
  const router = useRouter()

  //firebase gives a signout function
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => router.push('/'))
      .catch(e => console.log(e))
  }

  //firebase informs us if a user is logged in/out and we have to listen for this event
  // and set or remove token from the cookie
  React.useEffect(() => {
    // firebase onIdTokenChanged func gives us back a func that we can use to unmount the
    // component
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async user => {
      if (user) {
        const token = await user.getIdToken()
        setTokenCookie(token)
        setUser(user)
      } else {
        removeTokenCookie()
        setUser(null)
      }
    })

    return () => {
      cancelAuthListener()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, logout, authenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

// custom hook for accessing the context
export function useAuth() {
  return React.useContext(AuthContext)
}
