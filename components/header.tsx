import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import { SessionProvider } from "next-auth/react";
import SearchInput from "./search-input";
import { Suspense } from "react";

const Header = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <SessionProvider>
          <HeaderAuth />
        </SessionProvider>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
