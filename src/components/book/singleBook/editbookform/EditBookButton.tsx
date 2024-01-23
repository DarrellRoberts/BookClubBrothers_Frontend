import { Button } from "antd"

interface props {
    setShowBookEdit: React.Dispatch<React.SetStateAction<boolean>>,
    showBookEdit: boolean
}

const EditBookButton: React.FC<props> = ({setShowBookEdit, showBookEdit}) => {
return(
    <>
    <div className="flex items-center">
        {showBookEdit ? (
    <Button
        className="mb-5"
        onClick={() => setShowBookEdit(false)}
      >
        X
      </Button>
      ) : (
      <Button
        className="mb-5"
        onClick={() => setShowBookEdit(true)}
      >
        Edit Book
      </Button>
      )}
      </div>
    </>
)
}

export default EditBookButton