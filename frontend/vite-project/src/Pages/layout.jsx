import { Children } from "react";
import Navigation from "./navigation";

const Layout = ({Children})=>
{
    return(
        <>
        <Navigation />
        <main>{Children}</main>
        </>
    )
}
export default Layout