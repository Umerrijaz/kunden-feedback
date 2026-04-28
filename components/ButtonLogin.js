
import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name})=> {
    if (isLoggedIn)
    return (
    <Link href= "/dashboard"> Welcome Back, {name} </Link>
    )
    else {
        return <button>Log in</button>
    }};
export default ButtonLogin;