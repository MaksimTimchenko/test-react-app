import ErrorMessage from "./errorMessage/ErrorMessage";
import { Link } from "react-router-dom";


const Page404 = () => {

    return (
        <div>
            <ErrorMessage/>
            <Link className=" block text-center mt-4" to="/">
                <button >Back to main page</button>
            </Link>
        </div>
    )
}

export default Page404