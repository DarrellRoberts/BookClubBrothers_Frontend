import { Link } from "react-router-dom"

const HeaderLinks: React.FC = () => {
return (
<>
<ul className="headerLinks">
    <div className="bookMenu">
    <Link to="/books"><li>Book</li></Link>
    <div className="bookHover">
    <ul>
        <Link to="/books/library"><li>Book Library</li></Link>
        <Link to="/books/randomiser"><li>Book Randomiser</li></Link>
        <Link to="/books/quiz"><li>Quiz</li></Link>
        <Link to="/books/stats"><li className="w-[85%]">Book Stats</li></Link>
    </ul>
    </div>
    </div>

    <Link to="/club"><li>Club</li></Link>

    <Link to="/brothers"><li>Brothers</li></Link>
</ul>

<div className="bookHover">

</div>
</>
)
}

export default HeaderLinks