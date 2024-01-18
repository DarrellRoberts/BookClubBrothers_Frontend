import { Link } from "react-router-dom"

const BookHomepage: React.FC = () => {
return (
<>
<Link to="/">
        <span className="float-right m-5 font-semibold text-4xl ">Back</span>
      </Link>
<div className="flex flex-wrap">
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