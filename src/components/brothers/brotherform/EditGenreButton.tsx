import { Button } from "antd"

interface props {
    setEditGenre: React.Dispatch<React.SetStateAction<boolean>>,
    editGenre: boolean
}

const EditGenreButton: React.FC<props> = ({setEditGenre, editGenre}) => {
return(
    <>
    <div className="flex items-center">
        {editGenre ? null : (
      <Button
        className=""
        onClick={() => setEditGenre(true)}
      >
        Edit
      </Button>
      )}
      </div>
    </>
)
}

export default EditGenreButton