"use client";
import { BrickWallIcon, History, HomeIcon, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      path: "/dashboard",
      icon: HomeIcon,
    },
    {
      name: "History",
      path: "/dashboard/history",
      icon: History,
    },
    {
      name: "Billing",
      path: "/dashboard/billing",
      icon: BrickWallIcon,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center text-black font-bold text-xl text-center mt-3">
        Content Generation App
      </div>
      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
              path === menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
