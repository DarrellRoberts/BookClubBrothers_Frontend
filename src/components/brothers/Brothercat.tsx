import { useEffect, useState } from "react"

const Brothercat: React.FC = () => {
const [userData, setUserData] = useState([])

    const getData = async () => {
        const data = await fetch(`https://bookclubbrothers-backend.onrender.com/users`);
        const user = await data.json()
        setUserData(user);
    }

useEffect(() => { 
    getData()}, [])
console.log(userData);
    return (
        <>
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
        </>
    )
}

export default Brothercat