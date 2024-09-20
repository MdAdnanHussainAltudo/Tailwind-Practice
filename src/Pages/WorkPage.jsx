import Work from "../Components/Works/Work/Work";

const works = [
  {
    title: "Designing Dashboards",
    year: 2020,
    subtitle: "Dashboard",
    img: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg",
  },
  {
    title: "Vibrant Portraits of 2018",
    year: 2018,
    subtitle: "Illustration",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_NU46nvWXMjDzx0bnR5trL1jnZYJtPeJaA&s",
  },
  {
    title: "36 Days of Arabic type",
    year: 2022,
    subtitle: "Typography",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808/44e9f3117958755.Y3JvcCwzMDg0LDI0MTMsNyww.jpg",
  },
];

const WorkPage = () => {
  return (
    <>
      <div className="md:container md:mx-auto p-4 lg:px-20">
        <h1 className="font-bold text-4xl mb-12 px-8 md:px-4">Work</h1>
        {works.map((work) => (
          <Work
            key={work.img}
            title={work.title}
            year={work.year}
            subtitle={work.subtitle}
            img={work.img}
          />
        ))}
      </div>
    </>
  );
};

export default WorkPage;
