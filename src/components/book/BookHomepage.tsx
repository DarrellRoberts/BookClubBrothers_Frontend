import { Link } from "react-router-dom"

const BookHomepage: React.FC = () => {
return (
<>
<div className="flex">
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
</div>
</>
)
}

export default BookHomepage