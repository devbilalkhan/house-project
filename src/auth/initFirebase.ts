import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

export const initFirebase = () => {
  // Next js hot reload will initialize the code at every reload so lets ensure
  // that firebase connection only establishes when there is no connection
  if (!firebase.apps.length) firebase.initializeApp(config)
}
