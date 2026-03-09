"use client";

import type { LucideIcon } from "lucide-react";
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
import type { ReactNode } from "react";

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

function NavItem({
  path,
  icon: Icon,
  label,
  locked,
  suffix,
  basePath,
  pathname,
}: {
  path: string;
  icon: LucideIcon | (() => ReactNode);
  label: string;
  locked?: boolean;
  suffix?: ReactNode;
  basePath: string;
  pathname: string;
}) {
  const fullHref = path === "/" ? basePath || "/" : `${basePath}${path}`;
  const active = pathname === fullHref;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={active}
        tooltip={label}
        className={locked ? "text-muted-foreground" : undefined}
      >
        <Link href={fullHref}>
          {"render" in Icon ? <Icon className="size-4" /> : (Icon as () => ReactNode)()}
          <span>{label}</span>
          {suffix}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function NavSubItem({
  path,
  icon,
  label,
  basePath,
  pathname,
}: {
  path: string;
  icon: ReactNode;
  label: string;
  basePath: string;
  pathname: string;
}) {
  const fullHref = `${basePath}${path}`;
  const active = pathname === fullHref;

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={active}>
        <Link href={fullHref}>
          {icon}
          <span>{label}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

const ReviewIcon = (
  <span className="flex size-3.5 items-center justify-center">
    <span className="size-3 rounded-full border-2 border-current" />
  </span>
);

export function BrandSidebar({ basePath = "" }: BrandSidebarProps) {
  const pathname = usePathname();
  const nav = { basePath, pathname };

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="!top-16 !h-[calc(100svh-4rem)] [&_[data-slot=sidebar-inner]]:bg-background [&_[data-active=true]]:bg-foreground/10">
      <SidebarContent>
        {/* Main */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavItem path="/" icon={Home} label="Home" {...nav} />
              <NavItem path="/analytics" icon={BarChart2} label="Analytics" {...nav} />
              <NavItem path="/brand-configuration" icon={SlidersHorizontal} label="Brand Configuration" {...nav} />
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
                      <NavSubItem path="/marketplace/listings" icon={<ListChecks className="size-3.5" />} label="Listings" {...nav} />
                      <NavSubItem path="/marketplace/review" icon={ReviewIcon} label="Review Needed" {...nav} />
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
                      <NavSubItem path="/social-media/listings" icon={<ListChecks className="size-3.5" />} label="Listings" {...nav} />
                      <NavSubItem path="/social-media/review" icon={ReviewIcon} label="Review Needed" {...nav} />
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <NavItem path="/website-content" icon={Globe} label="Website Content" {...nav} />
              <NavItem path="/domain-names" icon={Link2} label="Domain Names" {...nav} />
              <NavItem path="/paid-ads" icon={Megaphone} label="Paid Ads" {...nav} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Intelligence */}
        <SidebarGroup>
          <SidebarGroupLabel>Intelligence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavItem path="/price-monitoring" icon={TrendingUp} label="Price Monitoring" locked suffix={<Lock className="ml-auto size-3.5" />} {...nav} />
              <NavItem
                path="/risk-intelligence"
                icon={() => (
                  <span className="flex size-4 items-center justify-center">
                    <span className="size-3 rounded-full border-2 border-current" />
                  </span>
                )}
                label="Risk Intelligence"
                locked
                suffix={<Lock className="ml-auto size-3.5" />}
                {...nav}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <NavItem path="/documentation" icon={BookOpen} label="Documentation" {...nav} />
          <NavItem path="/integrations" icon={Puzzle} label="Integrations" {...nav} />
          <NavItem path="/settings" icon={Settings} label="Settings" {...nav} />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
