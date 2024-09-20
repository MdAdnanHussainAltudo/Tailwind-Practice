import "./Work.css";

const Work = (prop) => {
  return (
    <div className="work-cont my-12 px-8 md:px-4">
      <div className="md:flex justify-between mb-6">
        <div className="md:flex">
          <div className="img-cont w-full h-full me-6 mb-6">
            <img
              src={prop.img}
              alt={prop.title}
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="info-cont">
            <h2 className="text-4xl font-bold">{prop.title}</h2>
            <div className="my-4">
              <span className="text-base px-3 py-1 font-bold rounded-full bg-black text-white me-6">
                {prop.year}
              </span>
              <span className="text-xl text-slate-500">{prop.subtitle}</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
              accusamus obcaecati! Quo perferendis quia veritatis minima iusto
              placeat voluptate maiores dicta porro, nesciunt corporis
              voluptatem ipsam a voluptatibus, aperiam suscipit.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Work;
