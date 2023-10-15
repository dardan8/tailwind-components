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
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <Image
            src={Logo}
            width={30}
            height={40}
            alt='Logo Image'
            className={`overflow-hidden transition-all ${
              expanded ? "w-7" : "w-0"
            }`}
          />
          <button
            className='0-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={expanded}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>

        <div className='border-t flex p-3 items-center'>
          <Image
            src={UserAvatar}
            width={40}
            height={40}
            alt='User avatar'
            className='w-10 h-10 rounded-md'
          />
          <div
            className={`flex justify-between items-center overflow-hidden ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className='leading-4'>
              <h4 className='font-semibold'>Dardan Dara</h4>
              <span className='text-xs text-gray-400'>
                dardan.dara@gmail.com
              </span>
            </div>
          </div>
          <MoreVertical size={20} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
