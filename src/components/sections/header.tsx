"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Type definitions
type LinkItem = {
  _id: string;
  _title: string;
  href?: string;
  sublinks: {
    items: SubLink[];
  };
};

type SubLink = {
  _id: string;
  _title: string;
  link: {
    __typename: string;
    page?: {
      pathname: string;
      _title: string;
    };
    text?: string;
  };
};

type CTAItem = {
  _id: string;
  label: string;
  href: string;
  type: string;
};

type HeaderData = {
  navbar: {
    items: LinkItem[];
  };
  rightCtas: {
    items: CTAItem[];
  };
};

type ImageData = {
  alt?: string;
  src?: string;
  srcDark?: string;
  width?: number;
  height?: number;
};

// LogoImage component
const LogoImage = ({ src, alt, width = 150, height = 40 }: ImageData) => {
  return src ? (
    <Image
      src={src}
      alt={alt || "Logo"}
      width={width}
      height={height}
      priority
      className="max-h-10 w-auto transition-transform duration-200 hover:scale-105"
    />
  ) : (
    <Image
      src="/Luntimeter.svg"
      alt="Luntimeter"
      width={width}
      height={height}
      priority
      className="max-h-10 w-auto transition-transform duration-200 hover:scale-105"
    />
  );
};

export const Header = ({
  logo,
  header,
}: {
  logo: ImageData;
  header: HeaderData;
}) => {
  return (
    <header
      className="sticky left-0 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
      aria-label="Site header"
    >
      <div className="flex h-16 w-full items-center">
        <div className="container mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <LogoImage {...logo} />
            <span className="text-lg font-bold text-[#2c4114] transition-colors duration-200 hover:text-[#1a2a0d]">
              Luntimeter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-12">
            <DesktopNavigation links={header.navbar.items} />
            <div className="flex items-center gap-3">
              {header.rightCtas.items.map((cta) => (
                <Button
                  key={cta._id}
                  asChild
                  variant={
                    cta.type === "primary"
                      ? "default"
                      : cta.type === "secondary"
                      ? "secondary"
                      : cta.type === "outline"
                      ? "outline"
                      : "ghost"
                  }
                  className="transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Menu"
                className="h-10 w-10 transition-all duration-200 hover:bg-accent hover:scale-105 active:scale-95"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] lg:hidden border-l bg-background/95 backdrop-blur"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 mb-8 p-2">
                  <LogoImage {...logo} />
                  <span className="text-lg font-bold text-[#2c4114]">
                    Luntimeter
                  </span>
                </div>
                <MobileNavigation links={header.navbar.items} />
                <div className="flex flex-col mt-auto gap-3 p-4">
                  {header.rightCtas.items.map((cta) => (
                    <Button
                      key={cta._id}
                      asChild
                      variant={
                        cta.type === "primary"
                          ? "default"
                          : cta.type === "secondary"
                          ? "secondary"
                          : cta.type === "outline"
                          ? "outline"
                          : "ghost"
                      }
                      className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Link href={cta.href}>{cta.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Component
function DesktopNavigation({ links }: { links: LinkItem[] }) {
  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList className="gap-1">
        {links.map((link) =>
          link.sublinks.items.length > 0 ? (
            <NavigationMenuItem key={link._id}>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                {link._title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 p-4">
                  {link.sublinks.items.map((sublink) => {
                    const { href, title } =
                      sublink.link.__typename === "PageReferenceComponent"
                        ? {
                            href: sublink.link.page?.pathname || "#",
                            title: sublink.link.page?._title || sublink._title,
                          }
                        : {
                            href: sublink.link.text || "#",
                            title: sublink._title,
                          };

                    return (
                      <li key={sublink._id}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <div className="text-sm font-medium leading-none">
                              {title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link._id}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href ?? "#"}
                  className="group relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {link._title}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Mobile Navigation Component
function MobileNavigation({ links }: { links: LinkItem[] }) {
  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) =>
        link.sublinks.items.length > 0 ? (
          <MobileSubmenu
            key={link._id}
            title={link._title}
            sublinks={link.sublinks.items}
          />
        ) : (
          <Link
            key={link._id}
            className="rounded-lg px-4 py-3 text-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href={link.href ?? "#"}
          >
            {link._title}
          </Link>
        )
      )}
    </nav>
  );
}

// Mobile Submenu Component using Collapsible
function MobileSubmenu({
  title,
  sublinks,
}: {
  title: string;
  sublinks: SubLink[];
}) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <span className="font-medium">{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 ui-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden transition-all duration-200">
        <ul className="flex flex-col space-y-1 p-2">
          {sublinks.map((sublink) => {
            const { href, title } =
              sublink.link.__typename === "PageReferenceComponent"
                ? {
                    href: sublink.link.page?.pathname || "#",
                    title: sublink.link.page?._title || sublink._title,
                  }
                : {
                    href: sublink.link.text || "#",
                    title: sublink._title,
                  };

            return (
              <li key={sublink._id}>
                <Link
                  className="block rounded-md px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href={href}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
