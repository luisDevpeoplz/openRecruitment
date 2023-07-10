import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
