import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import SidebarItem from "./components/SidebarItem";

export default function Home() {
  return (
    <main className='flex space-between pl-0 gap-10'>
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text='Dashboard'
          active
        />
        <SidebarItem icon={<LifeBuoy size={20} />} text='Targets' />
        <SidebarItem icon={<Boxes size={20} />} text='Statistics' alert />
      </Sidebar>

      <div className='flex flex-wrap w-5/6'>
        <Card />
      </div>
    </main>
  );
}
