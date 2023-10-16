"use client";

import { useContext } from "react";
import { SidebarContext } from "../components/Sidebar";

type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};

const SidebarItem = ({ icon, text, active, alert }: SidebarItemProps) => {
  const expanded = useContext(SidebarContext);

  return (
    <li
      className={`box-border relative flex items-center justify-center p-3 my-2 
     rounded-lg cursor-pointer transition-colors group text-sm 
    ${
      active
        ? "bg-gradient-to-tr from-zinc-200 to-zinc-200 text-zinc-800 font-medium"
        : "hover:bg-zinc-100 text-zinc-500"
    }
    `}
    >
      <span className='flex self-center ml-0'>{icon}</span>
      {expanded && (
        <span className={`overflow-hidden transition-all w-48 ml-2 }`}>
          {text}
        </span>
      )}

      {alert && (
        <div
          className={`absolute right-3 w-1.5 h-1.5 rounded bg-emerald-600
        ${expanded ? "" : " right-8 top-2"}
        `}
        />
      )}
      {!expanded && (
        <div
          className={`
      absolute left-full rounded-md px-2 py-1 ml-6
      bg-zinc-200 text-zinc-800 text-sm
      invisible opacity-20 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 shadow-sm
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
