import "../../style/homepage.css"
import "../../style/homepageRes.css"
import { Link } from "react-router-dom"

const Homepage: React.FC = () => {
    return (
        <>
        <div className="flex w-screen justify-center mt-10 text-center">
        <h1>The Book Club Brothers</h1>
        </div>

        <div className="brothersCon">
        <Link to="/brothers">
        <h2>The Brothers</h2>
        </Link>

        <Link to="/books">
        <h2>The Books</h2>
        </Link>

        <h2>The Club</h2>
        </div>

        </>
    )
}

export default Homepage