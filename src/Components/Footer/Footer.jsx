import Social from "../Social/Social";

const socials = [
  {
    icon: "fa-brands fa-square-facebook",
    link: "https://facebook.com/mdadnanhusaain",
    color: "text-blue-600",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://instagram.com/mdadnanhusaain",
    color: "text-fuchsia-600",
  },
  {
    icon: "fa-brands fa-x-twitter",
    link: "https://x.com/mdadnanhusaain",
    color: "text-black",
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://linkedin.com/in/mdadnanhusaain",
    color: "text-blue-500",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-12">
      <div className="socials flex">
        {socials.map((social) => (
          <Social
            key={social.icon}
            icon={social.icon}
            link={social.link}
            color={social.color}
          />
        ))}
      </div>
      <p>Copyright &copy;2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
