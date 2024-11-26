"use client";
import Card from "@/components/card/card";
import Header from "@/components/header";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />{" "}
      <div className="container mx-auto flex justify-between items-center text-start px-3 py-10 lg:py-6 lg:px-60">
        <Card searchQuery={searchQuery} />
      </div>
    </>
  );
}
