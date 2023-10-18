"use client";
import Card from "./components/Card";

import { SidebarContext } from "./components/Sidebar";
import { useContext } from "react";

export default function Home() {
  const expanded = useContext(SidebarContext);
  console.log(expanded);
  return (
    <main className={`flex bg-slate-500z z-0 h-full`}>
      <div className='flex flex-wrap '>
        <Card />
      </div>
    </main>
  );
}
