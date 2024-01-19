import { Link } from "react-router-dom"
import Back from "../misc/Back"
import "../../style/bookHomepage.css"
import "../../style/bookHomepageRes.css"


const BookHomepage: React.FC = () => {
return (
<>

<Back />
<h1  className="brothersTitle">The Books</h1>
<div className="flex justify-center ">
<div className="bookHomeGrid">
<div 
className="libaryButtons m-10 border-4 border-black p-3 rounded-lg bg-black text-white"
>
<Link to="/books/library"><h2>Book Library</h2></Link>
</div>

<div 
className="libaryButtons m-10 border-4 border-black p-3 rounded-lg bg-black text-white"
>
<Link to="/books/randomiser"><h2>Book Randomiser</h2></Link>
</div>

<div 
className="libaryButtons m-10 border-4 border-black p-3 rounded-lg bg-black text-white"
>
<Link to="/books/quiz"><h2>Quiz</h2></Link>
</div>

<div 
className="libaryButtons m-10 border-4 border-black p-3 rounded-lg bg-black text-white"
>
<Link to="/books/stats"><h2>Book Stats</h2></Link>
</div>
</div>
</div>
</>
)
}

export default BookHomepage