import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation as initialNavigation } from "../assets/Constants/constant";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ navBackground }) => {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 80) {
        currentSection = section.getAttribute("id");
      }
    });

    const updatedNavigation = initialNavigation.map((item) => ({
      ...item,
      current:
        item.href === `#${currentSection}` ||
        (item.href === "/" && currentSection === "home"),
    }));
    setNavigation(updatedNavigation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={` fixed z-20   transition-colors top-0 w-full  ${
          navBackground ? "bg-green-500 border-b-2 " : "bg-transparent"
        }`}
      >
        {({ open }) => (
          <>
            <div className=" max-w-7xl mx-auto  px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400    hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                {/* Navbar Menu */}
                <div className="flex w-full justify-center ">
                  {/* Icon */}

                  {/* Navbar Menu */}
                  <div className="hidden sm:ml-6 sm:block ">
                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gradient-to-r from-blue-700 to-indigo-500 text-white"
                              : "text-white bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500   hover:border-2  border-2 ",
                            "rounded-md px-3 py-2 text-lg font-medium tracking-wider transition ease-in-out duration-700 "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
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
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
