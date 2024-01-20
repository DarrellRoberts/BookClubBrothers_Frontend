import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { DoubleLeftOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Loader from "../loader/Loader"
import { AuthContext } from "../../context/authContext";
import { useJwt } from "react-jwt";
import PictureUpload from "./brotherform/PictureUpload";
import Back from "../misc/Back"
import Search from "../misc/Search"
import "../../style/brothercat.css"
import "../../style/brothercatRes.css"

const Brothercat: React.FC = () => {   
const { token } = useContext(AuthContext);
const {decodedToken}: {
    decodedToken?: {
      username: string;
      _id: string;
    };
  } = useJwt(token);
const userName = decodedToken?.username

const [userData, setUserData] = useState([])
const [bookData, setBookData] = useState([])
const [editImage, setEditImage] = useState<boolean>(false);
const [loading, setLoading] = useState<boolean>(true)
const [searchBar, setSearchBar] = useState("");

    const getData = async () => {
        if (searchBar) {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users/${searchBar}`);
        const user = await data.json()
        setUserData(user);
        setLoading(false);
        } else {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);
        const user = await data.json()
        setUserData(user);
        setLoading(false);   
        }
    }

    const getBook = async () => {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/books`);
        const user = await data.json()
        setBookData(user);
        setLoading(false);
    }

    const findBook = (id) => {
        const book = bookData.find(book => book._id === id)
        return book ? book.title : "book not found"
        }
    
    let userBookObj = {}
    const mapUserToBook = () => {
    let bookId = userData.map((user) => user?.userInfo?.books?.booksScored[user?.userInfo?.books?.booksScored.length - 1])
        bookId = bookId.map((book) => findBook(book))
        for (let i = 0; i < bookId.length; i++) {
            userBookObj[i] = bookId[i]
        }
    userBookObj = Object.entries(userBookObj)
    return userBookObj
    }
    mapUserToBook()

useEffect(() => { 
    getData();
    getBook()}, [])

const filteredResults = Array.isArray(userData)
? userData?.filter((user) => user.username.includes(searchBar))
: ["No results"];

    return (
        <>
    <div className="searchBackCon">
    <Search setSearchBar={setSearchBar} />
    <Back />
    </div>
    {loading ? (
    <Loader />
        ) : (
        <>
        <h1 className="brothersTitle">The Brothers</h1>
        <div className="flex flex-col items-center">
        {filteredResults.length > 0 ?
        filteredResults.map((user, index) => 
        (

            <div key={index} className="brotherBook border-black border-4 border-solid m-5 flex">
                
                <div className="brotherBookLeft flex flex-col justify-evenly items-center">
                <h2 className="text-black underline">{user?.username}</h2>
                <Link to={`/brothers/${user.username}`}>
                    <img
                    className="opacity-60 grayscale"
                    src={user?.userInfo?.profileURL} 
                    alt="profile_pic" /></Link>
                {userName === user?.username ?
                    editImage ?
                    <>
                    <div className="absolute">
                    <div className="flex flex-col items-center justify-center">
                    <Button
                    type="primary"
                    className="bg-black"
                    onClick={() => setEditImage(false)}
                    >X</Button>
                    <PictureUpload id = {user?._id} setEditImage={setEditImage} /> 
                    </div>
                    </div>
                    </> 
                    :
                    (
                    <div className="flex">
                    <Button
                    className="bg-black text-white" 
                    onClick={() => setEditImage(true)}>Change image
                    </Button>
                    </div>
                ) : null}
                </div>

                <div className="brotherBookRight flex flex-col pl-10 pt-5">
                    <ul>
                    <li className="brotherList underline pt-5">Location</li>
                    {user?.userInfo?.residence?.city ? 
                    (<li>City: {user?.userInfo?.residence?.city}</li>) 
                    : 
                    (<li className="text-red-500 font-bold">No city written</li> )}

                    {user?.userInfo?.residence?.country ? 
                    (<li>Country: {user?.userInfo?.residence?.country}</li>) 
                    : 
                    (<li className="text-red-500 font-bold">No country written</li> )}

                    <li className="brotherList underline pt-5">Favourite Genres</li>
                    {user?.userInfo?.favGenre.length > 0 ? user?.userInfo?.favGenre?.map((genre) =>
                    (
                    <li className="list-disc">{genre}</li>
                    )) : (
                    <li className="text-red-500 font-bold">None selected</li>
                    ) }
                    <li className="brotherList underline pt-5">Last rating given</li>
                    <li>Book: {userBookObj[userData.indexOf(user)][1]}</li>
                    <li>Score: {user?.userInfo?.books?.score[user?.userInfo?.books?.score.length - 1]}</li>
                    </ul>
                    <div className="clickPhotoCon mt-auto mb-5 flex">
                        <DoubleLeftOutlined className="leftArrow text-2xl" />
                        <span className="clickPhoto">Click the photo on the left to view more details</span>
                    </div>
                </div>
            </div>
        )
        )
        : (
            <p>Brother not found. Click on search to refresh.</p>
        )}
        </div>
        </>
        )}
        </>
    )
}

export default Brothercat