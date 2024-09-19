import Blog from "../Components/Blog/Blog.jsx";

const blogdata = {
  title: "UI Interactions of the week",
  date: "12 Feb 2019",
  field: "Express, Handlebars",
  data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo reiciendis reprehenderit at, rem quam ex totam corporis cupiditate assumenda possimus alias repellat, ipsam aut quo sint delectus veritatis ut!",
};

const BlogPage = () => {
  return (
    <div className="md:container md:mx-auto p-4 lg:px-48">
      <h1 className="font-bold text-4xl mb-12">Blog</h1>
      <Blog blogdata={blogdata} />
      <Blog blogdata={blogdata} />
      <Blog blogdata={blogdata} />
      <Blog blogdata={blogdata} />
    </div>
  );
};

export default BlogPage;
