import Login from "../user/Login"
import "../../style/header.css"
import "../../style/headerRes.css"
import { Button } from "antd"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useJwt } from "react-jwt";
import { getTime } from "../../functions/timeFunction";
import { Link } from "react-router-dom"

const HeaderCon:React.FC = () => {
    const [loadings, setLoadings] = useState([]);
    const { logout, token } = useContext(AuthContext);  
    const { decodedToken }: { decodedToken?: { username: string} } = useJwt(token);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
        setTimeout(() => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 6000);
      };

    const handleClick = () => {
      enterLoading(0);
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        logout();
      }, 5000);
    };
 const headerMessage = getTime();
return (
<div className="bg-black flex justify-between">
{token ? (
            <>
            <div className="flex items-center">
                    <Button
                      className="m-5"
                      type="primary"
                      ghost
                      loading={loadings[0]}
                      onClick={handleClick}
                    >
                      Logout
                    </Button>
                    </div>
                    <div className="flex items-center mr-10">
                      <Link to="/">
                    <h2 className="text-white text-3xl greeting">
                      {`${headerMessage} ${decodedToken?.username}`}
                      </h2>
                      </Link>
                      </div>
            </>
          ) : (
            <>
              <Login />
              </>
    )
}
</div>
)
}

export default HeaderCon