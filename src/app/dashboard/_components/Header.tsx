import { Search } from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div className=" flex px-3 justify-between p-5 shadow-sm border-b-2">
      <div className=" flex gap-2 items-center p-2 border rounded-md max-w-md">
        <Search />
        <input type="text" placeholder="Search...." className=" outline-none" />
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
