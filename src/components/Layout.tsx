import React, { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface layoutProps {
  main: ReactNode
}

const Layout: React.FC<layoutProps> = ({ main }) => {
  return (
    <>
      <Navbar />
      <main>{main}</main>
    </>
  )
}

export default Layout
