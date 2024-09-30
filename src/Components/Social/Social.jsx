import { Link } from "react-router-dom";
import "./Social.css";

const Social = (prop) => {
  return (
    <div className="social my-6">
      <Link to={prop.link}>
        <i
          className={`${prop.icon} hover:${prop.color} hover:scale-125 hover:drop-shadow-md`}
        ></i>
      </Link>
    </div>
  );
};

export default Social;
