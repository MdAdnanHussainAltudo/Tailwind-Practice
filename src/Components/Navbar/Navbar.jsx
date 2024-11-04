import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Blog", href: "/Tailwind-Practice/blog", current: false },
  { name: "Works", href: "/Tailwind-Practice/works", current: false },
  { name: "Contact", href: "/Tailwind-Practice/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl md:container md:mx-auto p-4 lg:px-20">
        <div className="relative flex items-center justify-between px-8 md:px-4">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-between">
            <NavLink
              to="/Tailwind-Practice"
              className={({ isActive }) =>
                classNames(
                  "flex items-center justify-center",
                  isActive && "linkactive"
                )
              }
            >
              <div className="hero-name text-xl text-slate-950 font-bold">
                Md Adnan Hussain
              </div>
            </NavLink>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        "text-slate-800",
                        "rounded-md px-3 py-2 text-base font-medium",
                        isActive && "linkactive"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "text-slate-800",
                "block rounded-md p-3 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
