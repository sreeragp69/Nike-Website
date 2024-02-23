import { hamburger } from "../assets/icons/";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants/";
import cross from "../assets/icons/cross.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between  max-container">
        <Link to={"/"}>
          <img src={headerLogo} alt="Logo" width={130} height={20} />
        </Link>

        <ul className="flex flex-1 justify-center items-center gap-16  max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* icons  */}
        <div onClick={handleNav} className="cursor-pointer block lg:hidden right-5 top-5 fixed ">
          {!nav ? (
            <div>
              <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
          ) : (
            <div>
              <img
                src={cross}
                width={30}
                height={30}
                alt="Close icon"
                className="text-black "
              />
            </div>
          )}
        </div>

        {/* iocns ends here  */}

        <div
          className={
            nav
              ? "bg-[#ECEEFF]  py-10 px-5 fixed left-0 top-0 h-full w-[50%]  lg:hidden ease-in-out duration-700  lg:left-[-100%]"
              : "lg:left-[-100%] fixed left-[-100%] ease-in-out duration-1000 h-full w-[60%] top-0 "
          }
        >
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={20} />
          </a>

          <ul className="flex flex-1 justify-center items-start flex-col gap-11  py-8">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="py-1 px-4 border-b border-b-coral-red last:border-0 w-full"
              >
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
