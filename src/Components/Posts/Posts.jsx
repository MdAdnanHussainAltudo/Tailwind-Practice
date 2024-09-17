import Card from "../Card/Card";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="posts px-2 py-4 bg-sky-100">
      <div className="md:container md:mx-auto p-4 lg:px-20">
        <h4 className="text-center md:text-start mb-4 text-2xl font-medium">
          Recent Posts
        </h4>
        <div className="md:flex justify-between">
          <Card title="Making a design system from scratch" />
          <Card title="Creating pixel perfect icons in Figma" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
