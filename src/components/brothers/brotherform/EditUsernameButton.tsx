import { Button } from "antd"

interface props {
    setEditUsername: React.Dispatch<React.SetStateAction<boolean>>,
    editUsername: boolean
}

const EditUsernameButton: React.FC<props> = ({setEditUsername, editUsername}) => {
return(
    <>
    <div className="flex items-center">
        {editUsername ? null : (
      <Button
        className=""
        onClick={() => setEditUsername(true)}
      >
        Edit
      </Button>
      )}
      </div>
    </>
)
}

export default EditUsernameButton