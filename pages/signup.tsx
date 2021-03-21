import Link from 'next/link'
import React from 'react'
import Button from 'src/components/Button'
import Container from 'src/components/Container'
import Layout from 'src/components/Layout'
import { initFirebase } from 'src/auth/initFirebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import Debug from 'src/components/Debug'

interface ISignUpProps {
  [key: string]: string
}

const signup: React.FC = () => {
  initFirebase()
  const [auth, setAuth] = React.useState<ISignUpProps>({
    email: '',
    password: '',
  })

  return (
    <Layout>
      <div className="my-64">
        <Container page="loginPageContainer">
          <div className="shadow-2xl dark:bg-[#233142] rounded px-16 py-12 mb-4 ">
            <div className="flex flex-col justify-center">
              <h1 className="mx-auto">Signup</h1>
              <div className="flex justify-center">
                <span className="text-lg">Already have an account?&nbsp;</span>
                <div>
                  <Link href="/login">
                    <a className="a-link text-lg">
                      <span>Login here</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="mx-auto w-20 my-12"
              src="/home-color.svg"
              alt="home icon"
            />
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow input"
                name="email"
                id="email"
                type="text"
                placeholder="Email address"
                onChange={e =>
                  setAuth({
                    ...auth,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="input shadow"
                name="password"
                id="password"
                type="password"
                placeholder="***************"
                onChange={e =>
                  setAuth({
                    ...auth,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
              />
              <p className="text-red text-xs italic my-2">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                isDisabled={auth.email === '' || auth.password === ''}
                onClick={async e => {
                  e.preventDefault()
                  console.log(auth)

                  await firebase
                    .auth()
                    .createUserWithEmailAndPassword(auth.email, auth.password)
                    .then(() => (window.location.href = '/'))
                    .catch(e => console.log(e))
                }}
              >
                Signup
              </Button>
              <a
                className="a-link inline-block align-baseline font-bold text-sm  hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </Container>
      </div>
      {/* <Debug jsonName={[].push(auth)} /> */}
    </Layout>
  )
}

export default signup
