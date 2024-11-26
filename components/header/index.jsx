"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoEarthOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
export default function Header({ searchQuery, setSearchQuery }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Türkçe");

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };
  //

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className=" w-full h-[230px] bg-black text-white">
      <div className="container mx-auto flex  lg:flex-row justify-between items-start lg:items-center text-center py-6 px-4 lg:px-60">
        <div className="flex items-start lg:items-center gap-2">
          <Image
            src="/assets/image/1likte.png"
            alt="1likte Logo"
            width={67.27}
            height={23.5}
          />
          <p>|</p>
          <p className="text-sm font-inter">Eğitim</p>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 relative">
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="text-sm font-medium flex items-center gap-2"
            >
              <IoEarthOutline className="w-4 h-4" />
              {selectedLanguage}
              <GoChevronDown className="w-4 h-4" />
            </button>

            {languageMenuOpen && (
              <ul className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-50">
                <li
                  className="px-4 py-1 hover:bg-gray-100 cursor-pointer font-inter"
                  onClick={() => changeLanguage("Türkçe")}
                >
                  Türkçe
                </li>
                <li
                  className="px-4 py-1 hover:bg-gray-100 cursor-pointer font-inter"
                  onClick={() => changeLanguage("English")}
                >
                  English
                </li>
                <li
                  className="px-4 py-1 hover:bg-gray-100 cursor-pointer font-inter"
                  onClick={() => changeLanguage("Deutsch")}
                >
                  Deutsch
                </li>
              </ul>
            )}
          </div>

          <button className="text-sm font-medium">Giriş Yap</button>
        </nav>
        <div className="lg:hidden">
          <CiMenuFries className="w-6 h-6" />
        </div>
      </div>
      <div className="container mx-auto flex px-4 lg:py-6 lg:px-60">
        <p className="text-start font-inter text-3xl lg:text-2xl font-medium leading-[34px] tracking-[-0.25px]  ">
          1likte Ekibinden tavsiyeler ve yanıtlar
        </p>
      </div>
      <div className="container mx-auto flex px-4 py-3 lg:px-60 ">
        <div className="relative w-full ">
          <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />

          <input
            type="text"
            placeholder="Yazılarda arayın..."
            className="w-full h-12 px-4 pl-10 text-sm  bg-[#414141]  font-inter  border border-gray-700 rounded-md "
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </header>
  );
}
