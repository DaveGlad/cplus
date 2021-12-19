import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
