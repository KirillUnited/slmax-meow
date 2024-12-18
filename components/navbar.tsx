import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="full" position="sticky" className="container">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">SHOP</p>
          </NextLink>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
