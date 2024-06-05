import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout = () => {
    return (
        <>
            <header className="">
                <Navbar/>
            </header>
            <main className="">
                <Outlet/>
            </main>
            <footer className="">
                <p>salom</p>
            </footer>
        </>
    )
}

export default MainLayout