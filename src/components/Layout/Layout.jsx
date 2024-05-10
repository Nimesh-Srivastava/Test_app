import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from "../../routers/Router"

const layout = () => {
  return (
    <>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default layout