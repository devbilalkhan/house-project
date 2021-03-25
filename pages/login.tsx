import Link from 'next/link'
import React from 'react'
import Button from 'src/components/Button'
import Container from 'src/components/Container'
import Layout from 'src/components/Layout'
import { initFirebase } from 'src/auth/initFirebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import Debug from 'src/components/Debug'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextApiRequest } from 'next'
import { loadIdToken } from 'src/auth/firebaseAdmin'
interface ILoginProps {
  [key: string]: string
}

const login: React.FC = () => {
  initFirebase()
  const [auth, setAuth] = React.useState<ILoginProps>({
    email: '',
    password: '',
  })
  const router = useRouter()
  return (
    <Layout>
      <div className="my-64">
        <Container page="loginPageContainer">
          <div className="shadow-2xl dark:bg-[#233142] rounded px-16 py-12 mb-4 ">
            <div className="flex flex-col justify-center">
              <h1 className="mx-auto">Login</h1>
              <div className="flex justify-center">
                <span className="text-lg">No Account?&nbsp;</span>
                <div>
                  <Link href="/signup">
                    <a className="text-lg a-link">
                      <span>Create an account</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="w-20 mx-auto my-12"
              src="/home-color.svg"
              alt="home icon"
            />
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-grey-darker"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="shadow input"
                id="email"
                type="text"
                name="email"
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
                className="block mb-2 text-sm font-bold text-grey-darker"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow input"
                id="password"
                type="password"
                name="password"
                placeholder="***************"
                onChange={e =>
                  setAuth({
                    ...auth,
                    [e.currentTarget.name]: e.currentTarget.value,
                  })
                }
              />
              <p className="my-2 text-xs italic text-red">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                isDisabled={auth.email === '' || auth.password === ''}
                onClick={async e => {
                  e.preventDefault()
                  await firebase
                    .auth()
                    .signInWithEmailAndPassword(auth.email, auth.password)
                    .then(() => router.push('/'))
                    .catch(e => console.log(e))
                }}
              >
                Login
              </Button>
              <a
                className="inline-block text-sm font-bold align-baseline a-link text-blue hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest)
  //   console.log({ uid })
  if (uid)
    // res.setHeader('location', '/')
    // res.statusCode = 302
    // res.end()
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  return { props: {} }
}
export default login
