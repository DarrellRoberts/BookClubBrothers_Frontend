import { Link } from "react-router-dom"
import {useState} from "react"

const HeaderLinksMobile: React.FC = () => {
const [showMenu, setShowMenu] = useState(false)
return (
<>
<div
onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} 
className="headerLinksMobCon">
<span className="text-4xl">|||</span>
{showMenu ? (
<>
<ul className="headerLinksMobile">
    <div className="bookMenuMobile">
    <Link to="/books"><li className="underline ml-5 text-3xl">Book</li></Link>
    <ul>
        <Link to="/books/library"><li>Book Library</li></Link>
        <Link to="/books/randomiser"><li>Book Randomiser</li></Link>
        <Link to="/books/quiz"><li>Quiz</li></Link>
        <Link to="/books/stats"><li className="w-[85%]">Book Stats</li></Link>
    </ul>
    </div>

    <div className="clubMenuMobile">
    <Link to="/club"><li className="underline ml-5 text-3xl">Club</li></Link>
    </div>

    <div className="brothersMenuMobile">
    <Link to="/brothers"><li className="underline ml-5 text-3xl">Brothers</li></Link>
    </div>
</ul>

<div className="bookHover">
</div>
</>
) : null}
</div>
</>
)
}

export default HeaderLinksMobile