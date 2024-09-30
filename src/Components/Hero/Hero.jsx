import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="md:container md:mx-auto p-4 lg:px-20">
        <div className="hero md:flex md:flex-row-reverse pb-6">
          <div className="hero-image w-full flex justify-center md:justify-end p-12">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/v2/C4D03AQE1jZIU4tRyOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1624861734790?e=1730937600&v=beta&t=81e0HcPNlMUawhpWj6UpF9zaWpDn-g-uLcTXorZi1Sg"
              alt="hero-image"
            />
          </div>
          <div className="info text-center md:text-start">
            <h1 className="mb-4 font-bold text-4xl">
              Hi, I am Md Adnan Hussain, Frontend Developer
            </h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptates rem quasi ducimus et blanditiis quaerat eaque,
              inventore, beatae consectetur libero dolores ex accusamus incidunt
              itaque sint aliquam quia vero.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-base rounded-md">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
