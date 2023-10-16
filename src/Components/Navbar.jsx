import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const handleNavigation = (sectionId, offset) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -[offset];
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = React.useState(0);

  const updateWidth = () => {
    const scrollTop = document.documentElement.scrollTop;
    const winScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / winScrollHeight) * 100;

    setScrollWidth(scrolled);
    console.log("updateWidth: ", scrolled);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", updateWidth);

    return () => {
      window.removeEventListener("scroll", updateWidth);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "74px",
        left: "0",
        zIndex: 60,
        height: "5px",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          width: `${scrollWidth}%`,
          height: "100%",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-black"
      >
        <a
          onClick={() => handleNavigation("home", 50)}
          className="flex items-center hover:text-blue-500 transition-colors text-lg cursor-pointer"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-black"
      >
        <a
          onClick={() => handleNavigation("about", 192)}
          className="flex items-center hover:text-blue-500 transition-colors text-lg cursor-pointer"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-black"
      >
        <a
          onClick={() => handleNavigation("projects", 112)}
          className="flex items-center hover:text-blue-500 transition-colors text-lg cursor-pointer"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-black"
      >
        <a
          href="#contact"
          className="flex items-center hover:text-blue-500 transition-colors text-lg cursor-pointer scroll-smooth"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <MTNavbar className="fixed mx-auto max-w-full px-6 py-3 shadow-none sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between text-black">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-black text-3xl"
            onClick={() => handleNavigation("home", -50)}
          >
            Martin.dev/
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </MTNavbar>
      <ScrollProgressBar />
    </>
  );
}

export default Navbar;
