import Login from "../user/Login"
import "../../style/header.css"
import { Button, Space } from "antd"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useJwt } from "react-jwt";

const HeaderCon:React.FC = () => {
    const [loadings, setLoadings] = useState([]);
    const { logout, token } = useContext(AuthContext);  
    const { decodedToken } = useJwt(token);

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
        logout();
      }, 5000);
    };
  console.log(decodedToken)
return (
<div className="headerCon">
{token ? (
            <>
              <Space>
                  <div>
                    <h2>{decodedToken?.name}</h2>
                  </div>
                  <div className="logout-darkmode-buttons">
                    <Button
                      className="logoutButtons"
                      type="primary"
                      ghost
                      loading={loadings[0]}
                      onClick={handleClick}
                    >
                      Logout
                    </Button>
                  </div>
              </Space>
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