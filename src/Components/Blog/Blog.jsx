import "./Blog.css";

const Blog = (prop) => {
  return (
    <div className="work-cont my-12 px-8 md:px-4">
      <h2 className="text-3xl font-semibold mb-3">{prop.blogdata.title}</h2>
      <div className="flex text-xl mb-4">
        <div>{prop.blogdata.date}</div>&nbsp; | &nbsp;
        <div className="text-slate-500">{prop.blogdata.field}</div>
      </div>
      <p>{prop.blogdata.data}</p>
      <hr className="my-8" />
    </div>
  );
};

export default Blog;
