import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" flex justify-center flex-col items-center   text-center">
      <div className="flex flex-col items-center justify-center w-[193px] h-[136px] gap-4 text-center">
        <div className="flex flex-row items-center justify-center gap-0">
          <div>
            <Image
              src="/assets/image/image.png"
              alt="logo"
              width={29.77}
              height={32}
            />
          </div>
          <div>
            <Image
              src="/assets/image/1likte.png"
              alt="text"
              width={91.6}
              height={32}
              className="filter grayscale brightness-90"
            />
          </div>
        </div>
        <div className="mb-4 flex space-x-6 text-gray-500 text-sm">
          <Link href="#" className="hover:text-gray-700">
            Görüşlerini Bildir
          </Link>
          <Link href="#" className="hover:text-gray-700">
            Hata Bildir
          </Link>
        </div>

        <div className="flex space-x-4   ">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaXTwitter />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
