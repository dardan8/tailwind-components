"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import Logo from "../../public/assets/images/logo-283.svg";
import Image from "next/image";
import UserAvatar from "../../public/assets/images/ui-avatar.png";
import { useState, createContext } from "react";

type ChildrenProps = {
  children?: React.ReactNode;
};

export const SidebarContext = createContext(true);

const Sidebar = ({ children }: ChildrenProps) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className={`h-screen ${expanded ? "w-1/6" : "w-auto"}`}>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm box-border'>
        <div
          className={`p-4 flex ${
            expanded ? "justify-between" : "justify-center"
          } items-center`}
        >
          {expanded && (
            <Image
              src={Logo}
              width={30}
              height={40}
              alt='Logo Image'
              className={`overflow-hidden transition-all w-8
            `}
            />
          )}
          <button
            className='rounded-lg bg-zinc-100 hover:bg-zinc-200 p-0.5'
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>
        <hr className='mb-4' />
        <SidebarContext.Provider value={expanded}>
          <ul className='flex-1 px-4'>{children}</ul>
        </SidebarContext.Provider>

        <div className='border-t flex p-4 items-center gap-1.5'>
          <Image
            src={UserAvatar}
            width={32}
            height={32}
            alt='User avatar'
            className={`rounded-md ml-1 ${expanded ? "w-8 h-8" : "w-5 h-5"} `}
          />
          <div
            className={`flex justify-between items-center overflow-hidden ${
              expanded ? "w-48" : "w-0"
            }`}
          >
            <div className='flex flex-col gap-0 leading-tight'>
              <h4 className='font-semibold text-zinc-800 '>Dardan Dara</h4>
              <span className='text-xs text-zinc-500 '>
                dardan.dara@gmail.com
              </span>
            </div>
          </div>
          <MoreVertical size={16} className='cursor-pointer' />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
