// import { useState, useContext } from "react";
// import axios from "axios";
// import { PlusOutlined } from '@ant-design/icons';
// import { Upload, Form, Button, Popconfirm } from "antd";
// import { AuthContext } from "../../../context/authContext";

// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

// interface props {
//     initialImage: string
//     id: string
// }

// const PictureUpload: React.FC<props> = ({initialImage, id }) => {
//   const [form] = Form.useForm(); // Create a form instance
//   const { logout } = useContext(AuthContext);
//   const [image, setImage] = useState(initialImage);
//   const [error, setError] = useState(false);
//   const [loadings, setLoadings] = useState([])

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("picture", image, image?.name);
//       console.log("FORM DATA", formData);
//       await axios.post(`https://teamup-service.onrender.com/user/upload/${id}`, formData);
//       setError(false);
//     } catch (error) {
//       setError(true);
//       console.error(error);
//     }
//   };

//   const handleImageChange = (info) => {
//       setImage(info.file);
//       console.log(info);
//   };

//   const enterLoading = (index) => {
//     setLoadings((prevLoadings) => {
//       const newLoadings = [...prevLoadings];
//       newLoadings[index] = true;
//       return newLoadings;
//     });
//     setTimeout(() => {
//       setLoadings((prevLoadings) => {
//         const newLoadings = [...prevLoadings];
//         newLoadings[index] = false;
//         localStorage.removeItem("token");
//         logout();
//         return newLoadings;
//       });
//     }, 500);
//   };

// const confirm = () =>
// new Promise((resolve) => {
// setTimeout(() => {
//     resolve(null); 
//     handleSubmit(); 
//     enterLoading()}, 3000);
// });

//   return (
//     <Form
//       form={form}
//       onFinish={handleSubmit}
//       name="picture_upload_form"
//       initialValues={{ fileList: [] }}
//     >
//       <Form.Item
//         label="Upload"
//         name="fileList"
//         valuePropName="fileList"
//         getValueFromEvent={normFile}
//       >
//         <Upload
//           name="picture"
//           action={`https://bookclubbrothers-backend.onrender.com/users/${id}`}
//           listType="picture-card"
//           onChange={handleImageChange}
//           beforeUpload={() => false} // Prevent default behavior of the Ant Design Upload component
//         >
//               <div>
//               <PlusOutlined />
//               <div style={{ marginTop: 8 }}>Upload</div>
//             </div>
//         </Upload>
//       </Form.Item>

//       <Popconfirm
//       className="changeUsername" 
//       title="WARNING"
//       description="Are you sure? You will have to login to your account again."
//       onConfirm={confirm}
//       onOpenChange={() => console.log('open change')}
//     >
//       <Button 
//       type="primary"
//       className="editConfirmButtons"
//       htmlType="submit">
//         Submit
//       </Button>
//       </Popconfirm>
//     </Form>
//   );
// }

// export default PictureUpload