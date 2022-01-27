import { Link } from "react-router-dom";
import Wrapper from "../wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h3>Page Not Found</h3>
        <Link to="/">Return Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
