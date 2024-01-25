import { Button } from "antd"

interface props {
    setEditCity: React.Dispatch<React.SetStateAction<boolean>>,
    editCity: boolean
}

const EditCityButton: React.FC<props> = ({setEditCity, editCity}) => {
return(
    <>
    <div className="flex items-center">
        {editCity ? null : (
      <Button
        className=""
        onClick={() => setEditCity(true)}
      >
        Edit
      </Button>
      )}
      </div>
    </>
)
}

export default EditCityButton