"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logoQuran from "/public/img/logo2.png";  
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigasiBar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const pathname = usePathname();

  // toggle sidebar
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const ActiveNavbar = (url) => pathname === url ? "active" : "";

  const Navigasi = () => {
    return (
      <div className='nav'>
        <ul>
          <li className="gap-4 flex text-[18px] font-medium text-gray-700">
            <Link href='/' className={`navLink ${ActiveNavbar('/')}`}>Home</Link>
            <Link href='/about' className={`navLink ${ActiveNavbar('/about')}`}>About</Link>
            <Link href='/contact' className={`navLink ${ActiveNavbar('/contact')}`}>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <>
      <div className="navbar p-3 fixed-top">
        <div className="container">
          <div className="logo-quran flex justify-center items-center">
            <Image src={logoQuran} width={50} height={50} className='rounded-full' alt="logo quransaya"/>
            <h1 className="font-bold mx-2 text-[20px]">Quran saya</h1>
          </div>
          <div className="navbar-icon flex justify-center items-center">
            <GiHamburgerMenu
              className="icons cursor-pointer"
              onClick={toggleSidebar}
            />
            <Navigasi className='nav'/>
          </div>
          
        </div>
      </div>

     {/* Sidebar */}
     <div
        className={`offcanvas offcanvas-start ${
          isOpenSidebar ? "show" : ""
        }`}
        style={{
          visibility: isOpenSidebar ? "visible" : "hidden",
          zIndex: 1050,
        }}
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-2">
            <Link href='/' className={`navLink ${ActiveNavbar('/')}`}>Home</Link>
            </li>
            <li className="mb-2">
            <Link href='/about' className={`navLink ${ActiveNavbar('/about')}`}>About</Link>
            </li>
            <li>
            <Link href='/contact' className={`navLink ${ActiveNavbar('/contact')}`}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpenSidebar && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleSidebar}
          style={{ zIndex: 1040 }}
        ></div>
      )}
    </>
  );
};

export default NavigasiBar;
