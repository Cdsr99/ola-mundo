import Banner from "Components/Banner"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {

    return(
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default PaginaPadrao