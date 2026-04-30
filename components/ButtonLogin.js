
import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name})=> {
    if (isLoggedIn)
    return (
    <Link href= "/dashboard" className="btn btn-primary"> Schön, dass du wieder da bist </Link>
    )
    else {
        return <button>Log in</button>
    }};
export default ButtonLogin;