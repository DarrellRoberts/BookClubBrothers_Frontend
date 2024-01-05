import "../../style/homepage.css"
import "../../style/homepageRes.css"
import { Link } from "react-router-dom"

const Homepage: React.FC = () => {
    return (
        <>
        <div className="flex justify-center mt-10 text-center">
        <h1 className="homepageTitle">The Book Club Brothers</h1>
        </div>

        <div className="brothersCon">
        
        <div className="book">

            <Link to="/books">
            <div className="bookEgg">
                <h2 className="mt-5">Book</h2>
            </div>
            </Link>


            <Link to="/about">
            <div className="clubEgg">
                <h2 className="mt-5">Club</h2>
            </div>
            </Link>

            <Link to="/brothers">
            <div className="brothersEgg">
                <h2 className="mt-10">Brothers</h2>
            </div>
            </Link>

        </div>

        </div>

        </>
    )
}

export default Homepage