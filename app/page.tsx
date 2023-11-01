"use client";
import Card from "./components/Card";

import { SidebarContext } from "./components/Sidebar";
import { useContext } from "react";

export default function Home() {
  const expanded = useContext(SidebarContext);

  return (
    <main className={`flex bg-slate-500 z-0 min-h-screen w-full`}>
      <div className='flex flex-wrap w-full'>
        <Card />
      </div>
    </main>
  );
}
