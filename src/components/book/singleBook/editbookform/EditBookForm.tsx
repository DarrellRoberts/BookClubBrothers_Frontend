import { useState, useContext } from "react"
import { AuthContext } from "../../../../context/authContext";
import { 
    Button, 
    Form, 
    Input, 
    Select,
    Space,
    Radio,
    // DatePicker
} from 'antd';

interface props {
    id: string,
    inAuthor: string
    inPublishedIn: number
    inPages: number
    inGenres: string[]
    inRead: boolean
    inDateOfMeeting?: string | null
}

const { Option } = Select

const EditBookForm:React.FC<props> = ({id, inAuthor, inPublishedIn, inPages, inGenres, inRead, inDateOfMeeting}) => {

const [author, setAuthor] = useState(inAuthor)
const [published, setPublished] = useState(inPublishedIn)
const [pages, setPages] = useState(inPages)
const [genre, setGenre] = useState(inGenres)
const [read, setRead] = useState(inRead)
// const [dateOfMeeting, setDateOfMeeting] = useState(inDateOfMeeting)
const [error, setError] = useState("")
const [loadings, setLoadings] = useState([])
const { token } = useContext(AuthContext);

console.log(inDateOfMeeting)

const handleSubmit = async () => {
    try {
        setError(null);
        const response = await fetch(`https://bookclubbrothers-backend.onrender.com/books/${id}`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
          body: JSON.stringify({                 
            author,
            published,
            pages,
            genre,
            read,
            // dateOfMeeting    
        }),
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
            console.log("something has happened");
          }
      
          if (response.ok) {
            console.log("SUCCESS!!!")
          }
    } catch (error) {
        setError(error)
        console.log(error)
    }
      };

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
            // document.location.reload();
            return newLoadings;
          });
        }, 4000);
      };
    return (
        <>
<Form
    onFinish={handleSubmit}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
  >

    {/* Author */}
<li className="mt-5 underline">Author</li>
<Form.Item
      label="Author"
      name="author"
      rules={[
        {
          required: true,
          message: "Please write the name of the author!",
        },
      ]}
    >
      <Input
    //   type="text"
      onChange={(e) => setAuthor(e.target.value)}
      defaultValue={author}
      value={author}
      />
    </Form.Item>

{/* Publishedin */}
<li className="mt-5 underline">Published in</li>
<Form.Item
      label="publishedIn"
      name="publishedIn"
      rules={[
        {
          required: true,
          message: "Please write the year",
        },
      ]}
    >
      <Input
      type="number"
      onChange={(e) => setPublished(Number(e.target.value))}
      defaultValue={published}
      value={published}
      />
    </Form.Item>

{/* pages */}
<li className="mt-5 underline">Number of pages</li>
<Form.Item
      label="pages"
      name="Pages"
      rules={[
        {
          required: true,
          message: "Please write the number of pages",
        },
      ]}
    >
      <Input
      type="number"
      onChange={(e) => setPages(Number(e.target.value))}
      defaultValue={pages}
      value={pages}
      />
    </Form.Item>

{/* select genres */}
<li className="mt-5 underline">Genres</li>
<Form.Item
label="Genres"
htmlFor="genre"
name="Genres"
rules={[
    { required: true },
    ]}
>
<Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="Select the genres"
    optionLabelProp="label"
    defaultValue={genre}
    value={genre}
    onChange={setGenre}
  >
    <Option value="Horror" label="Horror">
      <Space>
        <span role="img" aria-label="Horror">
        🧟
        </span>
        Horror
      </Space>
    </Option>
    <Option value="Thriller" label="Thriller" >
      <Space>
        <span role="img" aria-label="Thriller">
        🔪
        </span>
        Thriller
      </Space>
    </Option>
    <Option value="Comedy" label="Comedy">
      <Space>
        <span role="img" aria-label="Comedy">
        🥸
        </span>
        Comedy
      </Space>
    </Option>
    <Option value="Romance" label="Romance">
      <Space>
        <span role="img" aria-label="Romance">
        🌹
        </span>
        Romance
      </Space>
    </Option>
    <Option value="Fantasy" label="Fantasy">
      <Space>
        <span role="img" aria-label="Fantasy">
        🧙‍♂️
        </span>
        Fantasy
      </Space>
    </Option>
    <Option value="Adventure" label="Adventure">
      <Space>
        <span role="img" aria-label="Adventure">
        🏝️
        </span>
        Adventure
      </Space>
    </Option>
    <Option value="Anti-war" label="Anti-war">
      <Space>
        <span role="img" aria-label="Anti-war">
        🪖
        </span>
        Other
      </Space>
    </Option>
    <Option value="Drama" label="Drama">
      <Space>
        <span role="img" aria-label="Drama">
        🎭
        </span>
        Drama
      </Space>
    </Option>
    <Option value="Action" label="Action">
      <Space>
        <span role="img" aria-label="Action">
        💥
        </span>
        Action
      </Space>
    </Option>
    <Option value="Science-fiction" label="Science-fiction">
      <Space>
        <span role="img" aria-label="Science-fiction">
        🤖
        </span>
        Science-fiction
      </Space>
    </Option>
    <Option value="Dystopian" label="Dystopian">
      <Space>
        <span role="img" aria-label="Dystopian">
        👁️
        </span>
        Dystopian
      </Space>
    </Option>
    <Option value="Postmodern" label="Postmodern">
      <Space>
        <span role="img" aria-label="Postmodern">
        🟥
        </span>
        Postmodern
      </Space>
    </Option>
    <Option value="Anthology" label="Anthology">
      <Space>
        <span role="img" aria-label="Anthology">
        🤸
        </span>
        Anthology
      </Space>
    </Option>
    <Option value="Non-fiction" label="Non-fiction">
      <Space>
        <span role="img" aria-label="Non-fiction">
        📈
        </span>
        Anthology
      </Space>
    </Option>
  </Select>
  </Form.Item>

<li className="mt-5 underline">Read</li>

{/* read? */}
<Form.Item
label="Read"
htmlFor="bookInfo.read"
name="read"
rules={[
  {
    required: true,
    message: 'Have the group read the book?',
  },
]}
>
<Radio.Group 
onChange={(e) => setRead(e.target.value)} 
value={read}
>
              <Space direction="vertical">
                <Radio value={"true"}>Yes</Radio>
                <Radio  value={"false"}>No</Radio>
              </Space>
            </Radio.Group>
  </Form.Item>

{/* Date  */}
{/* <li className="mt-5 underline">Date of meeting</li>
<Form.Item
    label="DatePicker"
              >
   <DatePicker
      onChange={setDateOfMeeting}
      value={dateOfMeeting}
    />
    </Form.Item>

<li className="mt-5 underline">Score</li>
<li>{inScore}</li> */}

{/* Submission */}
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button 
      className="loginButtons"
      loading={loadings[0]} 
      onClick={() => enterLoading(0)} 
      htmlType="submit">
        Submit
      </Button>
      {error ? <h4 className="errorH">{error}</h4> : null}
    </Form.Item>
      </Form>
    </>
)
}

export default EditBookForm