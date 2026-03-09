"use client";

import {
  AlertTriangle,
  Bell,
  ChevronRight,
  PanelLeft,
  Rocket,
  Search,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "./logo";

const alerts = [
  {
    id: 1,
    icon: <AlertTriangle className="size-4 text-destructive" />,
    iconBg: "bg-destructive/10",
    title: "3 new Phishing domains detected",
    description:
      "marqvision-login.com, marqv1sion.com, and 1 more flagged as high-severity phishing threats.",
    badge: "NEW THREAT",
    badgeVariant: "destructive" as const,
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    icon: <AlertTriangle className="size-4 text-destructive" />,
    iconBg: "bg-destructive/10",
    title: "Trademark abuse detected",
    description:
      "marqai-download.net flagged for unauthorized trademark usage (severity 6.8).",
    badge: "NEW THREAT",
    badgeVariant: "destructive" as const,
    time: "15 min ago",
    unread: true,
  },
  {
    id: 3,
    icon: (
      <svg
        className="size-4 text-orange-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    iconBg: "bg-orange-500/10",
    title: "Watchlist domain threat upgraded",
    description:
      "marqvision.xyz changed from Inactive to Parked. Review recommended.",
    badge: "WATCHLIST",
    badgeVariant: "outline" as const,
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    icon: (
      <svg
        className="size-4 text-green-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    iconBg: "bg-green-500/10",
    title: "Case closed: marqv1sion.org",
    description:
      "Domain successfully removed by registrar. Enforcement complete.",
    badge: "CASE CLOSED",
    badgeVariant: "outline" as const,
    time: "3 hours ago",
    unread: false,
  },
];

const initialReleaseNotes = [
  {
    version: "v2.4.0",
    date: "Feb 12, 2026",
    title: "AI Agent Pipeline",
    description:
      "New AI enforcement agents with configurable thresholds for automated counterfeit detection and takedown.",
    unread: true,
  },
  {
    version: "v2.3.2",
    date: "Feb 3, 2026",
    title: "Domain Names Channel",
    description:
      "Full enforcement engine for domain-based phishing threats with multi-provider filing support.",
    unread: true,
  },
  {
    version: "v2.3.0",
    date: "Jan 22, 2026",
    title: "Asset Configuration Revamp",
    description:
      "Redesigned asset management with per-channel keyword controls and brand-level IP document linking.",
    unread: false,
  },
  {
    version: "v2.2.1",
    date: "Jan 10, 2026",
    title: "Analytics Dashboard",
    description:
      "Enhanced analytics with module-level breakdown, trend charts, and channel-specific success rates.",
    unread: false,
  },
];

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [releaseNotes, setReleaseNotes] = useState(initialReleaseNotes);
  const { toggleSidebar } = useSidebar();
  const unreadCount = alerts.filter((a) => a.unread).length;
  const unreadReleaseCount = releaseNotes.filter((n) => n.unread).length;

  const handleReleaseNotesOpen = (open: boolean) => {
    if (open && unreadReleaseCount > 0) {
      setReleaseNotes((prev) => prev.map((n) => ({ ...n, unread: false })));
    }
  };

  return (
    <header className="fixed z-50 w-full border-border border-b bg-background">
      <div className="flex h-16 items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={toggleSidebar}
          >
            <PanelLeft className="size-4" />
          </Button>

          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="hidden items-center space-x-1 md:flex">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="h-9 w-64 pl-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute top-2.5 left-3 size-4 text-foreground" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="mr-2 size-4" />
              Search
            </Button>
          )}

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative size-8"
              >
                <Bell className="size-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[400px] p-0">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Alerts</span>
                  {unreadCount > 0 && (
                    <Badge className="rounded-full px-2 py-0.5 text-xs">
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                    Mark all read
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Settings className="size-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex cursor-pointer items-start gap-3 border-b px-4 py-4 transition-colors last:border-b-0 hover:bg-muted/50"
                  >
                    <div
                      className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full ${alert.iconBg}`}
                    >
                      {alert.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm">{alert.title}</p>
                      <p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">
                        {alert.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge
                          variant={alert.badgeVariant}
                          className="rounded px-1.5 py-0 text-[10px]"
                        >
                          {alert.badge}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {alert.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 pt-1">
                      {alert.unread && (
                        <span className="size-2.5 rounded-full bg-foreground" />
                      )}
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover onOpenChange={handleReleaseNotesOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative size-8">
                <Rocket className="size-4" />
                {unreadReleaseCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {unreadReleaseCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[400px] p-0">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <Rocket className="size-4" />
                  <span className="font-semibold text-lg">Release Notes</span>
                </div>
                <PopoverClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                  >
                    <X className="size-4 text-muted-foreground" />
                  </Button>
                </PopoverClose>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {releaseNotes.map((note) => (
                  <div
                    key={note.version}
                    className="border-b px-4 py-4 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="rounded px-2 py-0.5 text-xs font-mono">
                        {note.version}
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        {note.date}
                      </span>
                    </div>
                    <p className="mt-2 font-semibold text-sm">{note.title}</p>
                    <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t p-3">
                <Button variant="ghost" className="w-full text-sm">
                  View All
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" className="mx-3 !h-6" />

          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative size-8"
              >
                <Bell className="size-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[400px] p-0">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Alerts</span>
                  {unreadCount > 0 && (
                    <Badge className="rounded-full px-2 py-0.5 text-xs">
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                    Mark all read
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Settings className="size-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex cursor-pointer items-start gap-3 border-b px-4 py-4 transition-colors last:border-b-0 hover:bg-muted/50"
                  >
                    <div
                      className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full ${alert.iconBg}`}
                    >
                      {alert.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm">{alert.title}</p>
                      <p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">
                        {alert.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge
                          variant={alert.badgeVariant}
                          className="rounded px-1.5 py-0 text-[10px]"
                        >
                          {alert.badge}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {alert.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 pt-1">
                      {alert.unread && (
                        <span className="size-2.5 rounded-full bg-foreground" />
                      )}
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Popover onOpenChange={handleReleaseNotesOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative size-8">
                <Rocket className="size-4" />
                {unreadReleaseCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {unreadReleaseCount}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[400px] p-0">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <Rocket className="size-4" />
                  <span className="font-semibold text-lg">Release Notes</span>
                </div>
                <PopoverClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                  >
                    <X className="size-4 text-muted-foreground" />
                  </Button>
                </PopoverClose>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {releaseNotes.map((note) => (
                  <div
                    key={note.version}
                    className="border-b px-4 py-4 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="rounded px-2 py-0.5 text-xs font-mono">
                        {note.version}
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        {note.date}
                      </span>
                    </div>
                    <p className="mt-2 font-semibold text-sm">{note.title}</p>
                    <p className="mt-1 text-muted-foreground text-xs leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t p-3">
                <Button variant="ghost" className="w-full text-sm">
                  View All
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="!h-6" />
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
