import "./Social.css";

const Social = (prop) => {
  return (
    <div className="social">
      <a href="">
        <i className={prop.icon}></i>
      </a>
    </div>
  );
};

export default Social;
