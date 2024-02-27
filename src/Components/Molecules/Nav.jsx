import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaHome, FaClipboardList, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";

import { CiMenuFries } from "react-icons/ci"

export const Nav = () => {

    const [click, setClick ] = useState(false)

    const handleClick = ( ) => setClick(!click)


  const content = (
    < >
      <div className="lg:hidden block absolute top-12 w-full left-0 right-0 bg-[#e9f2ef] transition ">
        <ul className="text-center text-xl p-20">
          <Link spy= {true} smooth={true} to="/home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded">
              <FaHome className="inline mr-2"/>
              Home
            </li>
          </Link>
          <Link spy= {true} smooth={true} to="/about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded">About</li>
          </Link>
          <Link spy= {true} smooth={true} to="/services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded">Services</li>
          </Link>
          <Link spy= {true} smooth={true} to="/projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded">Projects</li>
          </Link>
          <Link spy= {true} smooth={true} to="/contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className=" h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text3xl fonto-bold ">LOGO</span>
        </div>
        <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden ">
          <div className="flex-10">
            <ul className="flex gap-8 text-[18px]">
              <Link spy= {true} smooth={true} to="/home">
                <li className="hover:text-[#03A460] transition py-2 px-4 border-b-2 border-slate-900 hover:border-[#03A460] cursor-pointer">
                  <FaHome className="inline mr-2 "/>
                  Home
                </li>
              </Link>
              <Link spy= {true} smooth={true} to="/about">
                <li className="hover:text-[#03A460] transition py-2 px-2 border-b-2 border-slate-900 hover:border-[#03A460] cursor-pointer">
                <FaClipboardList className="inline mr-2" />
                  Projects
                </li>
              </Link>
              <Link spy= {true} smooth={true} to="/services">
                <li className="hover:text-[#03A460] transition py-2 px-2 border-b-2 border-slate-900 hover:border-[#03A460] cursor-pointer">
                <FaBriefcase className="inline mr-2" />
                  Services
                </li>
              </Link>
              <Link spy= {true} smooth={true} to="/projects">
                <li className="cursor-pointer transition py-2 px-2 bg-none rounded-md border-2 border-[#03A460] ">
                <FaUser className="inline mr-2" />
                  About us
                </li>
              </Link>
              <Link spy= {true} smooth={true} to="/contact">
                <li className="text-white cursor-pointer transition py-[10px] px-2 bg-[#03A460] rounded-md hover:bg-[#065f3a] ">
                <FaEnvelope className="inline mr-2" />
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition " onClick={handleClick}>
        { click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  );
};
