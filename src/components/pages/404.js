import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";


const Page404 = () => {

    return (
        <div className=" mt-48">
            <ErrorMessage/>
            <Link className=" block text-center mt-4" to="/">
                <button className="py-2 px-8 bg-main text-white rounded-md">Back to main page</button>
            </Link>
        </div>
    )
}

export default Page404