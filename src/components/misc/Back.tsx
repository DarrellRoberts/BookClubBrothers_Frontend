import { Link } from "react-router-dom"
import { SwapRightOutlined } from "@ant-design/icons"

const Back:React.FC = () => {
let landingPage = window.location.href

function removeLastPathSegment(url) {
    // Create a URL object
    const parsedUrl = new URL(url);
    // Get the pathname as an array of segments
    const pathSegments = parsedUrl.pathname.split('/').filter(Boolean);
    // Remove the last segment
    pathSegments.pop();
    // Update the URL object with the modified pathname
    parsedUrl.pathname = '/' + pathSegments.join('/');
    // Convert the URL object back to a string
    const modifiedUrl = parsedUrl.toString();
    return modifiedUrl;
  }

landingPage = removeLastPathSegment(landingPage)
return (
<>
<Link to={landingPage}>
    <div className="float-right m-5 font-semibold text-3xl flex flex-col">
        <h2>Back</h2>
        <SwapRightOutlined />
    </div>
</Link>
        </>
    )
}

export default Back