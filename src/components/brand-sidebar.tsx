"use client";

import {
  BarChart2,
  BookOpen,
  ChevronDown,
  Globe,
  Home,
  Link2,
  ListChecks,
  Lock,
  Megaphone,
  Puzzle,
  Settings,
  Share2,
  ShoppingBag,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface BrandSidebarProps {
  basePath?: string;
}

export function BrandSidebar({ basePath = "" }: BrandSidebarProps) {
  const pathname = usePathname();

  const href = (path: string) => `${basePath}${path}`;
  const isActive = (path: string) => pathname === href(path);

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="!top-16 !h-[calc(100svh-4rem)] [&_[data-slot=sidebar-inner]]:bg-background [&_[data-active=true]]:bg-foreground/10">
      <SidebarContent>
        {/* Main */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === (basePath || "/")} tooltip="Home">
                  <Link href={basePath || "/"}>
                    <Home className="size-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/analytics")} tooltip="Analytics">
                  <Link href={href("/analytics")}>
                    <BarChart2 className="size-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/brand-configuration")} tooltip="Brand Configuration">
                  <Link href={href("/brand-configuration")}>
                    <SlidersHorizontal className="size-4" />
                    <span>Brand Configuration</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Channels */}
        <SidebarGroup>
          <SidebarGroupLabel>Channels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Marketplace">
                      <ShoppingBag className="size-4" />
                      <span>Marketplace</span>
                      <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/marketplace/listings")}>
                          <Link href={href("/marketplace/listings")}>
                            <ListChecks className="size-3.5" />
                            <span>Listings</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/marketplace/review")}>
                          <Link href={href("/marketplace/review")}>
                            <span className="flex size-3.5 items-center justify-center">
                              <span className="size-3 rounded-full border-2 border-current" />
                            </span>
                            <span>Review Needed</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Social Media">
                      <Share2 className="size-4" />
                      <span>Social Media</span>
                      <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/social-media/listings")}>
                          <Link href={href("/social-media/listings")}>
                            <ListChecks className="size-3.5" />
                            <span>Listings</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/social-media/review")}>
                          <Link href={href("/social-media/review")}>
                            <span className="flex size-3.5 items-center justify-center">
                              <span className="size-3 rounded-full border-2 border-current" />
                            </span>
                            <span>Review Needed</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/website-content")} tooltip="Website Content">
                  <Link href={href("/website-content")}>
                    <Globe className="size-4" />
                    <span>Website Content</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/domain-names")} tooltip="Domain Names">
                  <Link href={href("/domain-names")}>
                    <Link2 className="size-4" />
                    <span>Domain Names</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/paid-ads")} tooltip="Paid Ads">
                  <Link href={href("/paid-ads")}>
                    <Megaphone className="size-4" />
                    <span>Paid Ads</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Intelligence */}
        <SidebarGroup>
          <SidebarGroupLabel>Intelligence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Price Monitoring" className="text-muted-foreground">
                  <Link href={href("/price-monitoring")}>
                    <TrendingUp className="size-4" />
                    <span>Price Monitoring</span>
                    <Lock className="ml-auto size-3.5" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Risk Intelligence" className="text-muted-foreground">
                  <Link href={href("/risk-intelligence")}>
                    <span className="flex size-4 items-center justify-center">
                      <span className="size-3 rounded-full border-2 border-current" />
                    </span>
                    <span>Risk Intelligence</span>
                    <Lock className="ml-auto size-3.5" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/documentation")} tooltip="Documentation">
              <Link href={href("/documentation")}>
                <BookOpen className="size-4" />
                <span>Documentation</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/integrations")} tooltip="Integrations">
              <Link href={href("/integrations")}>
                <Puzzle className="size-4" />
                <span>Integrations</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")} tooltip="Settings">
              <Link href={href("/settings")}>
                <Settings className="size-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
