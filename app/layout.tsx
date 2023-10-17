"use client";
import "./globals.css";
import { useState } from "react";
//next

import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

//components
import SidebarItem from "./components/SidebarItem";
import Sidebar from "./components/Sidebar";
import { GalleryHorizontalEnd, Boxes, FormInput } from "lucide-react";

const metadata: Metadata = {
  title: "Tailwind Components",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen'>
          <div className={`${expanded ? "w-1/6" : "w-[5%]"}`}>
            <Sidebar expanded={expanded} setExpanded={setExpanded}>
              <Link href='/sliders'>
                <SidebarItem
                  icon={<GalleryHorizontalEnd size={20} />}
                  text='Carousel Sliders'
                  active
                />
              </Link>
              <SidebarItem icon={<FormInput size={20} />} text='Forms' />
              <SidebarItem icon={<Boxes size={20} />} text='Statistics' alert />
            </Sidebar>
          </div>
          <div className={` ${expanded ? "w-5/6" : "w-[95%]"}`}>{children}</div>
        </div>
      </body>
    </html>
  );
}
