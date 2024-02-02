import { Outlet } from "react-router-dom"
import Header from "../UI/Header/Header"
import { Fragment } from "react"

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
    </Fragment>
  )
}

export default Layout