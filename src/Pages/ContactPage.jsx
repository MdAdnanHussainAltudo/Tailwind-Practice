import ContactForm from "../Components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="md:container md:mx-auto p-4 lg:px-20">
        <div className="hero md:flex md:flex-row-reverse px-8 md:px-4">
          <div className="hero-image w-full flex justify-center md:justify-end p-12">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/v2/C4D03AQE1jZIU4tRyOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1624861734790?e=1730937600&v=beta&t=81e0HcPNlMUawhpWj6UpF9zaWpDn-g-uLcTXorZi1Sg"
              alt="hero-image"
            />
          </div>
          <div className="info text-center md:text-start my-4">
            <h1 className="mb-4 font-bold text-4xl">
              Hi, I am Md Adnan Hussain, Frontend Developer
            </h1>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-base mt-6 rounded-md">
              Download Resume
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <h1 className="font-bold text-4xl mb-12 px-8 md:px-4">Contact</h1>
        <div className="mb-12 px-8 md:px-4">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
