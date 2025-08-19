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
      className="max-h-10 w-auto"
    />
  ) : (
    <span className="text-xl font-bold">Site Logo</span>
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
      className="sticky left-0 top-0 z-50 flex w-full flex-col border-b bg-background"
      role="banner"
      aria-label="Site header"
    >
      <div className="flex h-16 w-full">
        <div className="container mx-auto flex w-full items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LogoImage {...logo} />
            <span className="text-lg font-bold text-slate-800 leading-tight hidden sm:inline">
              Luntimeter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-10">
            <DesktopNavigation links={header.navbar.items} />
            <div className="flex items-center gap-2">
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
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] lg:hidden"
            >
              <MobileNavigation links={header.navbar.items} />
              <div className="flex flex-col mt-8 gap-2">
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
                    className="w-full"
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
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
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) =>
          link.sublinks.items.length > 0 ? (
            <NavigationMenuItem key={link._id}>
              <NavigationMenuTrigger className="px-4">
                {link._title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
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
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  className={navigationMenuTriggerStyle()}
                >
                  {link._title}
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
    <nav className="flex flex-col gap-4 mt-8">
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
            className="px-2 py-1 text-foreground hover:underline"
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
      <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1 text-foreground">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 ui-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 pt-1">
        <ul className="flex flex-col space-y-1">
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
                  className="block px-2 py-1 text-muted-foreground hover:text-foreground"
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
