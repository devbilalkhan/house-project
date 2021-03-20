import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Container from './Container'
import { useAuth } from 'src/auth/useAuth'

export const GlobalStyle: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setIsActive(!isActive)
    }
  }
  return (
    <button className="focus:outline-none" onClick={switchTheme}>
      {theme === 'light' ? (
        <svg
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  )
}

export const Navbar: React.FC = () => {
  const { authenticated, logout } = useAuth()

  return (
    <header>
      <nav className="py-8 dark:bg-gray-800 border-b-2 border-pink-600">
        <Container>
          <div className="grid grid-cols-3 gap-32">
            <div>
              <Link href="/">
                <a>
                  <div className="flex">
                    <img
                      src="/home-color.svg"
                      className="w-12 h-12 inline rounded-sm "
                      alt="house image icon"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <GlobalStyle />
            </div>
            <div className="flex justify-around  items-center font-semibold dark:text-gray-500 text-black">
              {authenticated ? (
                <>
                  <Link href="/">
                    <a className="a-link">Add House</a>
                  </Link>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="a-link">Signup / Login</a>
                  </Link>
                </>
              )}
              {/* <Link href="/">
              </Link> */}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
