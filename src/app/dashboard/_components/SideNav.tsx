"use client";
import { History, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";
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
    <div className="h-screen relative p-5 shadow-sm border">
      <div className="flex justify-center text-black font-bold text-xl text-center mt-3">
        Content Generation App
      </div>
      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              key={index}
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className=" absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div> */}
    </div>
  );
};

export default SideNav;
