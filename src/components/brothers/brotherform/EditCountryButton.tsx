import { Button } from "antd"

interface props {
    setEditCountry: React.Dispatch<React.SetStateAction<boolean>>,
    editCountry: boolean
}

const EditCountryButton: React.FC<props> = ({setEditCountry, editCountry}) => {
return(
    <>
    <div className="flex items-center">
        {editCountry ? null : (
      <Button
        className=""
        onClick={() => setEditCountry(true)}
      >
        Edit
      </Button>
      )}
      </div>
    </>
)
}

export default EditCountryButton