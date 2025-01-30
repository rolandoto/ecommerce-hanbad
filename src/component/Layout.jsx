import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout =({children}) =>{

    return (
        <div className="layout">
            <head>
                 <title>JS Mastery Store</title>
            </head>
            <header>
        
            </header>
            <main className="main-container">
            {children}
            </main>
            <footer>
           
            </footer>
      </div>
    )

}

export default Layout