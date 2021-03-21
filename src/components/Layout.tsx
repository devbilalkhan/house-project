import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface layoutProps {
  children: ReactNode
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      {/signup|login/.test(router.route) ? null : <Navbar />}

      <main>{children}</main>
    </>
  )
}

export default Layout
