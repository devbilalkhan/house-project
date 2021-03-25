import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import Container from './Container'
import { Navbar } from './Navbar'

interface layoutProps {
  children: ReactNode
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Navbar />

      <main>
        {children}
        <Container>
          <div className="grid h-full grid-cols-2 mx-auto"></div>
        </Container>
      </main>
    </>
  )
}

export default Layout
