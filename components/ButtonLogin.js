
import Link from "next/link";

const ButtonLogin = (props)=> {
    if (props.isLoggedIn)
    return (
    <Link href= "/dashboard"> Welcome Back, {props.name} </Link>
    )
    else {
        return <button>Log in</button>
    }};
export default ButtonLogin;