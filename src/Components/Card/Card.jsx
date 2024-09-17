import "./Card.css";

const Card = (prop) => {
  return (
    <div className="card rounded bg-white border-2 border-slate-300 mb-6 px-8 md:px-0">
      <div className="card-body flex-auto p-4">
        <h5 className="card-title text-xl font-bold mb-4">{prop.title}</h5>
        <h6 className="card-subtitle text-slate-700 mb-6">
          5 Sep 2023 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern
        </h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto
          magnam inventore autem dolores magni culpa reiciendis quod eligendi
          veritatis voluptas exercitationem perferendis asperiores, molestias
          non officiis, suscipit, incidunt in.
        </p>
      </div>
    </div>
  );
};

export default Card;
