import React from "react";

const Navbar = () => {
  return (
    <nav className="  w-full flex m-0 p-0 bg-indigo-900 text-white py-0 ">
      <ul className="flex gap-4 mx-2 " >
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Contact</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About us</li>
      </ul>
    </nav>
    // <nav className="bg-slate-600 text-white w-full flex m-0 p-4">
    //   <ul className="flex space-x-4 list-none p-0 m-0">
    //     <li>home</li>
    //     <li>contact</li>
    //     <li>about us</li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
