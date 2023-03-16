import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-[206px] py-[10px] ">
      <Link href="/">
        <Image src={logo} alt="logo" width={115} height={61} />
      </Link>
      <div className="flex justify-between items-center text-[#707070] text-[14px]">
        <div className=" flex ">
          <Link className=" px-[25px]" href="/">
            TOP
          </Link>
          <Link className=" px-[25px]" href="/">
            PRODUCTS
          </Link>
          <Link className=" px-[25px]" href="/">
            BLOG
          </Link>
          <Link className=" px-[25px]" href="/">
            CONTACT
          </Link>
          <Link className=" px-[25px]" href="/">
            FAQ
          </Link>
        </div>
        <Button/>
      </div>
    </div>
  );
};

export default Header;
