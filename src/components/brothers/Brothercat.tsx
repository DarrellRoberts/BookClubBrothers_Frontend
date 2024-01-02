import { useEffect, useState } from "react"
import Loader from "../loader/Loader"

const Brothercat: React.FC = () => {
const [userData, setUserData] = useState([])
const [loading, setLoading] = useState(true)
const [loadingMessage, setLoadingMessage] = useState<string>("")

    const getData = async () => {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);
        const user = await data.json()
        setUserData(user);
        setLoading(false);
    }

    const Loading = () =>  {
        const timer = setTimeout(() => {
        setLoadingMessage("Sorry for the wait...Render wants me to pay money for a faster API-fetch time. Fat chance that is happening.... won't be long now")
      }, 10000)
      return () => clearTimeout(timer);
    }

useEffect(() => { 
    getData();
Loading()}, [])
console.log(userData);
    return (
        <>
    {loading ? (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
    <Loader />
    <h2 className="m-5 text-center text-xl">{loadingMessage}</h2>
    </div>
        ) : (
        <div className="flex-col">
        {userData.map((user) => 
        (
            <div className="border-black border-4 border-solid m-5 flex-col h-[300px]">
            <h2 className="text-black">{user?.username}</h2>
            <img src={user?.userInfo?.profileURL} width="125px" alt="profile_pic" />
            </div>
        )
        )}
        </div>
        )}
        </>
    )
}

export default Brothercat