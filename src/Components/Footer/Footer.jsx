import Social from "../Social/Social";

const socials = [
  { icon: "fa-brands fa-square-facebook" },
  { icon: "fa-brands fa-instagram" },
  { icon: "fa-brands fa-x-twitter" },
  { icon: "fa-brands fa-linkedin" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-12">
      <div className="socials flex">
        {socials.map((social) => (
          <Social key={social.icon} icon={social.icon} />
        ))}
      </div>
      <p>Copyright &copy;2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
