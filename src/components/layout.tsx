import Header from './header'
import Footer from './footer'
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  

 function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout